// seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Fetch users and organizations from the database
  const users = await prisma.user.findMany();
  const organizations = await prisma.receivingOrganization.findMany();

  if (users.length === 0 || organizations.length === 0) {
    console.error(
      "Please ensure there are users and receiving organizations in the database."
    );
    return;
  }

  // Generate 200 donated items
  const donatedItems = [];
  for (let i = 0; i < 200; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomOrganization =
      organizations[Math.floor(Math.random() * organizations.length)];
    donatedItems.push({
      assetNumber: `AN-${i.toString().padStart(4, "0")}`,
      donatedItem: `Donated Item ${i + 1}`,
      userId: randomUser.id,
      orgId: randomOrganization.id,
    });
  }

  // Insert donated items into the database
  await prisma.donated.createMany({
    data: donatedItems,
    skipDuplicates: true, // Optional: skip if the record already exists
  });

  console.log("Seeded 200 donated items");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
