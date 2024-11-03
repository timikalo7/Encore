/*
  Warnings:

  - Added the required column `org_id` to the `donated` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "donated" DROP CONSTRAINT "donated_id_fkey";

-- AlterTable
ALTER TABLE "donated" ADD COLUMN     "org_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "donated" ADD CONSTRAINT "donated_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "receiving_organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donated" ADD CONSTRAINT "donated_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
