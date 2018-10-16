db.createUser(
   {
     user: "mongodbOSeMUser",
     pwd: "securePaSs",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
