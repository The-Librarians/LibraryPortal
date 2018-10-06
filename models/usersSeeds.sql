USE libraryportal_db;

<<<<<<< HEAD
INSERT INTO users (name, phone, email, cardNumber, password, isChild, isAdult, createdAt, updatedAt)
VALUES ("Brandy Nicholson","972-555-1298","brandy.nicholson@thelibrarians.com", 15234, "Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	   ("Alex Bowen","214-555-1569", "alex.bowen@thelibrarians.com", 15235, "Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00")
	   ("David Penberthy", "214-555-7125", "david.penberthy@thelibrarians.com", 15236, "Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Sadegh Sachedina", "214-555-3369", "sadegh.sachedina@thelibrarians.com", 15237,"Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Aaron, Davis", "214-555-5489", "aaron.davis@thelibrarians.com", 15238, "Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Kellen Weigel", "214-555-3326", "k.weigel@gmail.com", 15239, "Welcome123", true, false, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Riley Weigel", "214-555-3327", "r.weigel@gmail.com", 15300, "Welcome123", true, false, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Brooklyn Nicholson", "214-555-2563", "b.nicholson@gmail.com", 15301,"Welcome123", true, false, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Stacy Anderews", "214-555-8153", "s.andrews@gmail.com", 15302, "Welcome123", true, false, "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
       ("Katelyn Nicholson", "214-555-8152", "kate.nicholson@gmail.com", 15303, "Welcome123", false, true, "2018-10-01 6:23:00", "2018-10-01 6:23:00")
=======
INSERT INTO users (name, phone, email, cardNumber, isChild, isAdult, itemsOut, history, createdAt, updatedAt)
VALUES  ("Brandy Nicholson","972-555-1298","brandy.nicholson@thelibrarians.com", 15234,  false, true, "Killer Game Programming | Davison, Andrew", "The Song of Achilles | Miller, Madeline", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("Alex Bowen","214-555-1569", "alex.bowen@thelibrarians.com", 15235,  false, true, "River Bodies | Katchur, Karen", "Daughters of the Lake | Webb, Wendy", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("David Penberthy", "214-555-7125", "david.penberthy@thelibrarians.com", 15236,  false, true,"A Case of Need | Crichton, Micheal", "Target | Patterson, James", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
        ("Sadegh Sachedina", "214-555-3369", "sadegh.sachedina@thelibrarians.com", 15237, false, true, "A Map of Days | Riggs, Ransom", "The Storm Runner | Cervantes, J.C.", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("Aaron, Davis", "214-555-5489", "aaron.davis@thelibrarians.com", 15238,  false, true,"Mirage | Daud, Somaiya", "What if its Us | Albertalli, Becky", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
        ("Kellen Weigel", "214-555-3326", "k.weigel@gmail.com", 15239,  true, false, "The Meltdown | Kinney, Jeff", "Hey, Kiddo | Krosoczka, Jarrett", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("Riley Weigel", "214-555-3327", "r.weigel@gmail.com", 15300,  true, false, "I Lost My Tooth | Willems, Mo", "Turning Pages | Sotomayor, Sonia", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
        ("Brooklyn Nicholson", "214-555-2563", "b.nicholson@gmail.com", 15301, true, false, "Saving Winslow | Creech, Sharon", "Upside Down Magic | Mlynowski, Sarah", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("Stacy Anderews", "214-555-8153", "s.andrews@gmail.com", 15302,  true, false, "Stick Cat | Watson, Tom", "Wedgie and Gizmo | Selfors, Suzanne", "2018-10-01 6:23:00", "2018-10-01 6:23:00"),
	    ("Katelyn Nicholson", "214-555-8152", "kate.nicholson@gmail.com", 15303,  false, true, "Dear Evan Hansen | Emmich, Val", "Muse of Nightmares | Taylor, Laini" "2018-10-01 6:23:00", "2018-10-01 6:23:00")
       

       
>>>>>>> aad9773c913126d0b27a12f74550f2c1c5e1a085
