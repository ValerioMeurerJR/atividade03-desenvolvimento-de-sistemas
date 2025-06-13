import { Developy } from "@prisma/client";
import { prisma } from "../prisma/client";


class DevelopyService {
    public async register({ name, bio, github_url, avatar_url, techs }: CreateDevelopyType): Promise<void> {
        const developyExist = await prisma.developy.findFirst({
            where: { name: name }
        })

        if (developyExist) {
            throw new Error("Nome ja cadastrado!")
        }

        const developy: Developy = {
            id: crypto.randomUUID(),
            name: name,
            bio: bio,
            github_url: github_url,
            avatar_url: avatar_url,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date()
        }
        await prisma.$transaction([
            prisma.developy.create({ data: developy }),
            ...techs.map((tech: CreateTechsType) =>
                prisma.techs.create({
                    data: {
                        id: crypto.randomUUID(),
                        name: tech.name,
                        developyId: developy.id,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                })
            )
        ])
    }

    public async getAll() {
        return prisma.developy.findMany({
            include: {
                Techs: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }

    public async getById(id: string) {
        return prisma.developy.findUnique({
            where: { id: id },
            include: {
                Techs: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }
    public async deleteById(id: string) {
        const developy = await this.getById(id)
        if (!developy) {
            throw new Error("cadastrato não encontrado!")
        }
        return prisma.developy.update({
            where: { id: id },
            data: { is_active: !developy.is_active }
        })
    }
    public async updateById(id: string, { name, bio, github_url, avatar_url, techs }: CreateDevelopyType) {
        const developy: any = await this.getById(id)
        if (!developy) {
            throw new Error("cadastrato não encontrado!")
        }
        const result = await prisma.developy.findUnique({
            where: { id: id },
            include: {
                Techs: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        const notExist = result?.Techs.filter(
            tech => !techs.some(value => value.name === tech.name)
        );
        if (notExist?.length) {
            notExist.map(async (remove) =>
                await prisma.techs.delete({
                    where: { name: remove.name }
                })
            )
        }
        const notExistCreate = techs.filter(
            tech => !result?.Techs.some(value => value.name === tech.name)
        );
        if (notExistCreate) {
            notExistCreate.map(async (tech: CreateTechsType) =>
                await prisma.techs.create({
                    data: {
                        id: crypto.randomUUID(),
                        name: tech.name,
                        developyId: developy.id,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                })
            )
        }
        prisma.developy.update({
            where: { id: id },
            data: {
                name: name,
                bio: bio,
                github_url: github_url,
                avatar_url: avatar_url
            }
        })

    }


}

export const developyService = new DevelopyService();