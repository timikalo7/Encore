-- CreateTable
CREATE TABLE "receiving_organizations" (
    "id" TEXT NOT NULL,
    "primaryPartner" TEXT NOT NULL,
    "secondaryPartner" TEXT NOT NULL,
    "receivingOrgName" TEXT NOT NULL,
    "receivingOrgIdNumber" TEXT NOT NULL,
    "typeOfOrganization" TEXT NOT NULL,
    "receivingOrgAddress" TEXT NOT NULL,
    "receivingOrgContactName" TEXT NOT NULL,
    "receivingOrgContactEmail" TEXT NOT NULL,
    "receivingOrgPhoneNumber" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receiving_organizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "receiving_organizations_receivingOrgIdNumber_key" ON "receiving_organizations"("receivingOrgIdNumber");

-- CreateIndex
CREATE UNIQUE INDEX "receiving_organizations_receivingOrgContactEmail_key" ON "receiving_organizations"("receivingOrgContactEmail");

-- AddForeignKey
ALTER TABLE "receiving_organizations" ADD CONSTRAINT "receiving_organizations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
