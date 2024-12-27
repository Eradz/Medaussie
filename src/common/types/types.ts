export type postType = {
    _id: string,
    title: string,
    type: string,
    excerpt: string,
    slug: string,
    featuredImageUrl: string,
    author: {
      _id: string,
      firstname: string,
    },
    body: string
  }

export type userType = {
      _id:string,
      firstname: string,
      lastname: string,
      email: string,
      role: string
  }

export type listTopType = {
        class: string,
        name: string
    }