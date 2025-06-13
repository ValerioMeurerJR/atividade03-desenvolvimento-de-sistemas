import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { developyService } from "../Services/DevelopyService";

export async function DevelopyController(app: FastifyInstance) {
  app.post(
    "/developy",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const body = request.body as CreateDevelopyType
      try {
        await developyService.register(body)
        return reply.code(201).send();
      } catch (error: any) {
        return reply.code(400).send({ erro: error.message })
      }
    }
  );

  app.get(
    "/developys",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const result = await developyService.getAll()
        return reply.code(200).send(result);
      } catch (error: any) {
        return reply.code(400).send({ erro: error.message })
      }
    }
  );

  app.get(
    "/developy/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as { id: string }
      try {
        const result = await developyService.getById(id)
        return reply.code(200).send(result);
      } catch (error: any) {
        return reply.code(400).send({ erro: error.message })
      }

    }
  );

  app.patch(
    "/developy/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as { id: string }
      try {
        const result = await developyService.deleteById(id)
        return reply.code(200).send(result);
      } catch (error: any) {
        return reply.code(400).send({ erro: error.message })
      }
    }
  );

  app.patch(
    "/developy/edit/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as { id: string }
      const body = request.body as CreateDevelopyType
      try {
        const result = await developyService.updateById(id, body)
        return reply.code(200).send(result);
      } catch (error: any) {
        return reply.code(400).send({ erro: error.message })
      }
    }
  );


}
