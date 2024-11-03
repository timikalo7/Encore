-- AlterTable
ALTER TABLE "receiving_organizations" ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lng" DOUBLE PRECISION,
ALTER COLUMN "secondaryPartner" DROP NOT NULL;
