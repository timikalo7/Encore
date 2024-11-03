-- CreateTable
CREATE TABLE "donated" (
    "id" TEXT NOT NULL,
    "assetNumber" TEXT NOT NULL,
    "donatedItem" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donated_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donated" ADD CONSTRAINT "donated_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
