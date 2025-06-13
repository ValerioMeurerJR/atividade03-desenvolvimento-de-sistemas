-- CreateTable
CREATE TABLE "developy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "github_url" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "developy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "developyId" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "techs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "techs" ADD CONSTRAINT "techs_developyId_fkey" FOREIGN KEY ("developyId") REFERENCES "developy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
