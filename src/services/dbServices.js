const { Sequelize, Model, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/api')

const sequelize = new Sequelize('lostInSky', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
    },
 });

const testConnection = (async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()

class Users extends Model {}
Users.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    }
    },
    {
        sequelize,
        modelName: 'users', // name of the table in the database
        timestamps: false
    })

class Cottages extends Model {}
Cottages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DOUBLE,
            defaultValue: 100000
        },
        numberOfFloors: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        space: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'cottages', // name of the table in the database
        timestamps: false
    }
)

class Reservations extends Model {}
Reservations.init(
  {
    // define the columns of the reservations table here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        defaultValue: 100000,
        allowNull: false
    },
    description: {
        type: DataTypes.JSON
    },
    cottageId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    // add more columns as necessary
  },
  {
    sequelize,
    modelName: 'reservations', // name of the table in the database
    timestamps: false
  }
);

class ReservationService extends Model {}
ReservationService.init(
  {
    // define the columns of the reservationService table here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    servicePrice: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    reservationId: {
        type: DataTypes.UUID,
        allowNull: false
    }
    // add more columns as necessary
  },
  {
    sequelize,
    modelName: 'reservationservices', // name of the table in the database
    timestamps: false
  }
);


sequelize.sync()
  .then(() => {
    console.log('All tables created successfully!');
  })
  .catch((error) => {
    console.error('Error syncing tables:', error);
  });

Reservations.belongsTo(Cottages, {
    foreignKey: 'cottageId'
});
Reservations.hasMany(ReservationService, {
    foreignKey: 'reservationId',
    onDelete: 'CASCADE',
  });

async function getAllReservationsForCottage(request, response) {
    let dates = [];
    let cotId = request.params.id
    const data = await Reservations.findAll({
        include: [{
            model: Cottages,
            required: true,
            where: {id: cotId}
        }]
    })
    data.forEach(element => {
        dates.push({
            "checkIn": element.checkIn,
            "checkOut": element.checkOut
        })
    });
    response.status(200).json(dates)
}

async function getAllServicesForReservations(request, response) {
    // let services = [];
    const reservationId = request.params.id;

    const reservation = await Reservations.findAll({
      where: { id: reservationId },
      include: { model: ReservationService }
    });

    if (!reservation) {
        return response.status(404).json({ error: 'Reservation not found' });
      }
    // code for just getting the services without reservation itself
    // reservation.forEach(element => {
    //     services.push(element.reservationservices)
    // });
    response.status(200).json(reservation)
};

module.exports = {
    Users,
    Reservations,
    ReservationService,
    Cottages,
    getAllReservationsForCottage,
    getAllServicesForReservations
};
