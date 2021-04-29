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
        photoUrl: 'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
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
      }
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
