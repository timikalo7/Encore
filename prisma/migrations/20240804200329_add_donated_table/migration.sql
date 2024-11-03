-- DropForeignKey
ALTER TABLE "donated" DROP CONSTRAINT "donated_user_id_fkey";

-- AddForeignKey
ALTER TABLE "donated" ADD CONSTRAINT "donated_id_fkey" FOREIGN KEY ("id") REFERENCES "receiving_organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
