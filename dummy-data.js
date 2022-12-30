const DUMMY_TESTS = [
  {
    id: "test1",
    title: "Java",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    date: "2021-05-12",
    image: "images/java.jpg",
    domain: "Software Engineering",
    category: "Programming",
    isFeatured: false,
  },
  {
    id: "Machine Learning",
    title: "Machine Learning",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    date: "2021-05-30",
    image: "images/java.jpg",
    domain: "Data Science",
    category: "Programming",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
];

export function getFeaturedTests() {
  return DUMMY_TESTS.filter((test) => test.isFeatured);
}

export function getAllTests() {
  return DUMMY_TESTS;
}

export function getFilteredTests(dateFilter) {
  const { year, month } = dateFilter;

  let filteredTests = DUMMY_TESTS.filter((test) => {
    const eventDate = new Date(test.date);
    return (
      testDate.getFullYear() === year && testDate.getMonth() === month - 1
    );
  });

  return filteredTests;
}

export function getTestById(id) {
  return DUMMY_TESTS.find((test) => test.id === id);
}

// -------------------------------------------------------------- DUMMY COURSES

const DUMMY_COURSES = [
  {
    id: "course-java",
    title: "Formation Java",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    date: "2021-05-12",
    image: "images/java.jpg",
    domain: "Software Engineering",
    category: "Programming",
    isFeatured: false,
  },
  {
    id: "course-ml",
    title: "Formation Machine Learning",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    date: "2021-05-30",
    image: "images/java.jpg",
    domain: "Data Science",
    category: "Programming",
    isFeatured: true,
  },
  {
    id: "course-reactjs",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "course-reactjs2",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
  {
    id: "test3",
    title: "ReactJS",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/java.jpg",
    domain: "Web development",
    category: "Web development",
    isFeatured: true,
  },
];

export function getFeaturedCourses() {
  return DUMMY_COURSES.filter((course) => course.isFeatured);
}

export function getAllCourses() {
  return DUMMY_COURSES;
}

export function getFilteredCourses(dateFilter) {
  const { year, month } = dateFilter;

  let filteredCourses = DUMMY_COURSES.filter((course) => {
    const courseDate = new Date(course.date);
    return (
      courseDate.getFullYear() === year && courseDate.getMonth() === month - 1
    );
  });

  return filteredCourses;
}

export function getCourseById(id) {
  return DUMMY_COURSES.find((course) => course.id === id);
}
