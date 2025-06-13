type CreateDevelopyType = {
    name: string,
    bio: string,
    github_url: string,
    avatar_url: string,
    techs: CreateTechsType[]
}

type CreateTechsType = {
    name: string
}

