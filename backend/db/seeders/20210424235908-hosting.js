'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Hostings', [
      {
        name: 'Four Lakes Winery Vista', // 1
        description: 'Take in a beautiful scenic view of four lakes in the state of Washington. This place offers full privacy and quiet spaces for those needing to get away for a while.',
        locationDetails: 'Located in Washington.',
        states_id: 47,
        user_id: 4,
        cost: 80,
        photoUrl: 'https://images.unsplash.com/photo-1517792844039-e52afb564132?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Glamping Glen', // 2
        description: 'A cozy home away from, experience glamping in your own private neck of the woods. This tent comes complete with your own bed, dresser, and just a short walk to a clean bathroom.',
        locationDetails: 'Located in Texas.',
        states_id: 43,
        user_id: 2,
        cost: 50,
        photoUrl: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tiny House in Mountains', // 3
        description: 'A unique cozy loft style designed house in the middle of the mountains. There are hiking areas nearby; great for those needing an escape from a busy life.',
        locationDetails: 'Located in North Carolina',
        states_id: 33,
        user_id: 6,
        cost: 85,
        photoUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Burro Ranch', // 4
        description: 'This location is in a private area and a perfect location to have fun adventures. The entire lot will be yours to explore during your time. Fire pits are available.',
        locationDetails: 'Located in Colorado',
        states_id: 6,
        user_id: 1,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1581636923345-c49610a4e0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone Mill Camping', // 5
        description: 'This location provides a wonderful spot for those wanting some quiet time without being completely secluded. Tents are made available and food is also provided.',
        locationDetails: 'Located in Georgia',
        states_id: 10,
        user_id: 5,
        cost: 45,
        photoUrl: 'https://images.unsplash.com/photo-1605289609008-188320c69892?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Camping By The River', // 6
        description: 'Perfect place for those seeking to completely disappear for a few days. Cell phone coverage is poor and there is no internet. There are hiking trails and a lake for fishing.',
        locationDetails: 'Located in Washington',
        states_id: 47,
        user_id: 3,
        cost: 70,
        photoUrl: 'https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lakefront Paradise Tent Site', // 7
        description: 'Bustling location near the lakes. Plenty of activities to do nearby, with multiple tent sites available. People love to come here and enjoy each other\'s company.',
        locationDetails: 'Located in Colorado',
        states_id: 6,
        user_id: 8,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1574977622598-6c5c0fa4c0ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crystal Creek Cabin', // 8
        description: 'Nice sized cabin set with amenities. Located near other cabins, this place allows for visitors to join in on community events created to help everyone relax.',
        locationDetails: 'Located in Colorado',
        states_id: 6,
        user_id: 9,
        cost: 30,
        photoUrl: 'https://images.unsplash.com/photo-1525113990976-399835c43838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watchman Campground', // 9
        description: 'There are sites to for RVers, walk-in lovers, and first-come, first-served last-minute planners (you know who you are).',
        locationDetails: 'Located in Georgia',
        states_id: 10,
        user_id: 10,
        cost: 45,
        photoUrl: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aspenglen Campground', // 10
        description: 'Move over elk, you know you gotta share this space with campers too. Aspen Glen Campground in Rocky Mountain National Park is a popular hangout for elk, especially in the fall.',
        locationDetails: 'Located in Colorado',
        states_id: 6,
        user_id: 7,
        cost: 45,
        photoUrl: 'https://images.unsplash.com/photo-1565806946566-a16cc0092a73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Lake Grounds', // 11
        description: 'A hiker’s paradise, South Lake Grounds is the ultimate base camp for all kinds of adventures. Here you’ll find incredible overlooks, cool historic ruins, and miles and miles of trails, both rugged and meandering.',
        locationDetails: 'Located in Arizona',
        states_id: 3,
        user_id: 11,
        cost: 55,
        photoUrl: 'https://images.unsplash.com/photo-1565806946566-a16cc0092a73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Woodland Valley', // 12
        description: 'There’s a bit of magic here, along with some of the state’s best hiking trails. Shoulder your pack and hit the trails for the day, and the campground will welcome you home with a hot shower, private campsites, and a babbling stream to soothe your weary toes.',
        locationDetails: 'Located in New York',
        states_id: 32,
        user_id: 12,
        cost: 75,
        photoUrl: 'https://images.unsplash.com/photo-1602537316587-747ef7d9d2ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wildom Farm', // 13
        description: 'Welcome to Wildom Farm! We are a regenerative farm raising pigs, chickens, turkeys and some produce. Campers can access the entire farm during their stay and guided farm tours are available by request.',
        locationDetails: 'Located in Maryland',
        states_id: 20,
        user_id: 13,
        cost: 60,
        photoUrl: 'https://images.unsplash.com/photo-1598381562072-b82cf4839baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Meadow Land', // 14
        description: 'If you are looking for lots of open space with a 360 degree view of the sky then this is the place for you! This site is great for viewing all kinds of celestial events.',
        locationDetails: 'Located in Colorado',
        states_id: 22,
        user_id: 14,
        cost: 40,
        photoUrl: 'https://images.unsplash.com/photo-1460131548611-36aac9b6a901?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Big Ren Barn Glamp', // 15
        description: 'GlampOut in a 200+ year old rustic Big Red Bank Barn! This is very much a unique camping experience.  With no heat or air conditioning, it is typically about 10 degrees warmer or cooler inside in the summer and winter months.',
        locationDetails: 'Located in Georgia',
        states_id: 10,
        user_id: 15,
        cost: 55,
        photoUrl: 'https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Savanna Creek Farm', // 16
        description: 'Come out and camp on a secluded 60 acre farm.  22 acres of pasture surrounded by woods, which backs up to the Savanna Creek.  This can be your base camp for exploring the many interesting attractions.',
        locationDetails: 'Located in South Carolina',
        states_id: 40,
        user_id: 16,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1564488467352-cbe34a556d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beyond Yonder', // 17
        description: 'Pitch your tent next to the zen deck, in the fire pit grounds next to the tipi poles or greenhouse or next to the medicine wheel circle. You may use the wifi.',
        locationDetails: 'Located in Kentucky',
        states_id: 17,
        user_id: 17,
        cost: 30,
        photoUrl: 'https://images.unsplash.com/photo-1617817907875-490e50139e22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paradise', // 18
        description: 'Primitive camping and horseback riding welcome. Hay fields with some wooded areas, small ponds and a few trails to walk or horseback.',
        locationDetails: 'Located in Kentucky',
        states_id: 17,
        user_id: 18,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1566313729074-fa2dcf53f8c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indian Rock', // 19
        description: 'Start your 20-minute hike directly from the secure parking area. You can experience this unique rock outcropping where I have found several Indian Arrowheads over the years and Indians have surely camped in the early days.',
        locationDetails: 'Located in Michigan',
        states_id: 22,
        user_id: 19,
        cost: 55,
        photoUrl: 'https://images.unsplash.com/photo-1566977518453-cad8508e0d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zephyr Mountain Grove', // 20
        description: 'Mountainous camping with a view of the Regenerative Organic Avocado and Citrus grove and views of the city lights at night. The farm has over 600 avocados trees with 7 varieties of avocados and 20 various citrus and nut trees.',
        locationDetails: 'Located in California',
        states_id: 5,
        user_id: 20,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1599507687406-305af72b8774?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Farm Forest Glamping in Custer', // 21
        description: 'Come enjoy our space, connect with nature 🌿 and regain your appreciation for the things you have in your life. My family and I built this glamping site in our back woods area during the quarantine of 2020.',
        locationDetails: 'Located in Washington',
        states_id: 47,
        user_id: 21,
        cost: 85,
        photoUrl: 'https://images.unsplash.com/photo-1601352209565-75652a4e1f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Barefoot Gee\'s Tent Camping', // 22
        description: 'Overlooking the small artisan creek deep in the woods, Pitch your tent in our Oak Grove, You can walk Among the pines along the creek where the otters play on their journey through their territory.',
        locationDetails: 'Located in South Carolina',
        states_id: 43,
        user_id: 22,
        cost: 35,
        photoUrl: 'https://images.unsplash.com/photo-1504591504549-8ce1589ea6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});

    */
    return queryInterface.bulkDelete('Hostings', null, {});
  }
};
