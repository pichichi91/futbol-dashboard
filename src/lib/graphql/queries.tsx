import { gql } from '@apollo/client';


const allPlayers = gql`{
    allProfile{
      name,
      slug {
        current
      }
      image {
        asset {
          url
        }
      }
      team {
        name
        image{
          asset{
            path
          }
        }
      }
      Website
      WebsiteURL
      
      
    }
  }`

  const allTeams = gql`{
    allTeam{
      name,
      slug {
        current
      }
      image {
        asset {
          url
        }
      }
    }
  }`

  const playerDetail = gql`
  query Player($slug: String) 
  {
    allProfile(where: {slug: { current: { matches: $slug } }}){
        name,
        slug {
          current
        }
        image {
          asset {
            url
          }
        }
        team {
          name
          image{
            asset{
              path
            }
          }
        }
        Website
        WebsiteURL
        
        
      }
    }
    `
  export {allPlayers, allTeams, playerDetail}