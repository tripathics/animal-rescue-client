import TwoColLayout from "@/components/layouts/twocol";
import PageHeader from "../../components/layouts/PageHeader/PageHeader";
import styles from "./Home.module.scss";
import cx from "classnames";
import { Post, PostsContainer } from "@/components/ui/Post";
import { useEffect, useState } from "react";
import { PostType } from "@/types/Post.type";
import getPosts from "@/utils/api/getPosts";

// dummy list of organizations that rescue animals
const dummyOrganizations = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHZbYSXoWT8oGLBXzjWPk-NlID7XJYtCV7j_yOYiLNQ&s",
    name: "sharda stray foundation",
    url: "https://example.com",
    location: "Kathmandu, Nepal",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksP8KGtG4jZviU3GaWLQVc600H_xi28dC-A&s",
    name: "Purucat House",
    url: "https://example.com",
    location: "tamilnadu, india",
  },
  {
    id: 3,
    image: "https://l450v.alamy.com/450v/2dkttc4/animal-shelter-flat-icon-color-simple-element-from-volunteering-collection-creative-animal-shelter-icon-for-web-design-templates-infographics-and-2dkttc4.jpg",
    name: "Chandrashaker gau shala",
    url: "https://example.com",
    location: "koyom batur, indonesia",
  },
];

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const posts = await getPosts();
    if (posts) {
      setPosts(posts.posts);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PageHeader bgImage="hero.png">
        <div className={cx(styles.header)}>
          <div className={styles["header-content"]}>
            <h1 className={styles.heading}>Live and let live</h1>
            <p>
              Detested by so many, yet these dogs nourish the hope for love and affection. I've met so many of them and felt the longing of their souls. My Dagi, who lived as a street dog in Portugal for many years, means everything to me. I don't even remember how days without her were!
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="__page-content container">
        <TwoColLayout
          sidebar={
            <div>
              <h3>Find help nearby </h3>
              <div className={styles.sideOrg}>
                <ul>
                  {dummyOrganizations.map((org) => (
                    <li key={org.id}>
                      <img src={org.image} alt={org.name} />
                      <div>
                        <a href={org.url}>{org.name}</a>
                        <p>{org.location}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        >
          <div>
            <PostsContainer>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  description={post.description}
                  userName={post.first_name}
                  pictures={post.pictures}
                  userAvatar={post.avatar}
                />
              ))}
              <Post
                description="we need help for the treatment of this animals "
                userName="blue ocean foundation"
                pictures={[
                  "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
                  "https://via.placeholder.com/200",

                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW80IzkSJTMpww8p-fyyO9x6OczBKFW-wJSH0CO-vQSw&s",
                ]}
              />
              <Post
                description="today we rescued this little guy for the flood"
                userName="sharda stray foundation"
                pictures={[
                  "data:image/webp;base64,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",
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGRgXGBYYGBoYGxgXGBoYGBoYGxgYHyggGholGxodITEiJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQFy0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD4QAAECBAQEBAUDAwMCBwEAAAECEQADITEEEkFRBWFxgSKRobEGEzLB8ELR4VJi8RRykiOiBxUWY4Ky0jP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAQADAQEBAQAAAAAAAAABEQISITEDQWEi/9oADAMBAAIRAxEAPwDg4aHaE0YGZoTRJoUARaFEoZoAaHh2hQA0JokBCaERmhRJoTQBECLAIZIiYEAM0Jok0KEEYZom0IQGgRDNE2hAQBBoTRNoZoAi0KJtDwGpaFDtCEMjQ7Q4EO0AQaE0SaHywBFododoTQAzQokBCAgIzQmiQEO0BmAiTQ4TEmhEi0O0SaE0BoQmibQmhGraEBEiITQBFoTRNoTQBFoUSaFAA8IRJocRRGAh2h2iSBAStocCNPC8JXMon6v6bP0JoY6Tg3wmS3zB/wDEi45HQwDXKK4bMYKCSUnUVY7Ug3CfDGJmWln2va8ek4PAJlgJQlk1uXIJ2JD/AOItmkhiRUE2LPzDi4h+jnNeeL+DcQA7J6FQ2fzglPwYogeNI318iOresdpMnA9CHfvtp+bxFUwCnctzH+fKHsHg5H/0SWBE0GtaaE0I8/WIf+hprsJktu/7R2nK/SjgUhkz6t+c/WD0PFx4+BpofxyzYCpF7liNIFn/AAjiElgAoM5UDQctyXegEd8lVhqTrtTa14KSlq+v77W/NDIMeT4vhM1F0KYuzggluX2gAiPZJkoKuNNnNdBzJjB4p8PSphtl3IFeQG3X0ibBlectCjoOM8D+U5FuVX27RhqREGpaFEyIZoAi0O0OBDtAEYUPChgPDgQ8SRDJOTKUbB9KRvcJ4B8z6sw6MK80q9wYf4e4YmYqo+zfzzrHdyjLlpCRUgM5hyaQbAcORKQwHdr9Q7PB2Cm5hAc+bXwk6W9iPvEsDND1J/NLRPl7aSemvk3r5tyiidIbSn7+n+YhiuJIl3P7mMfFfESaFwK2NH7G3cRrnpGtIYcFwQdx96j77Q07DkEEV0J5P7+lYowXFEqBZVkuO9+sGKXmANKu/k32jO1cCvr26CukEycKHHIdGfn+XipnJpr50f3i+ZiAEkmgIHq7ftBKMNLQlJqTQDtf7AecWyCFAEFxdt/z858T8Q/EqE+FKhc679PykZcv4wKSAjxZeRYHbYBovlNeoLNLfm8ZGKWXue/7RjYL4zlrQcx8W3+TFmGx4mup3D6G5/GjPuq5jZKZawyrdteUY3FeCSyMyCKA0A9+g94KTN0cvy/ccoA4lxhEoDx2owUkjum4PVzD+xNmVyWLlMSwYQK0a/EFCaMybGt/tGUYmzAi0IiJNCywGhCibCGhkGi6QlzDZq1r2glE0JS4cHdv5ipNqbW5h+IpkSwBQqPPTr+0bnDsb8wfU52Bfzjy/is9ZbxPeyvcRu/BOGBUHEynKnmxHqIqzIPru5qC7t3uG7VjmPiHjZkkAdRU1A0P+I62dh/DZ6U6df4jzn4rkKVMN2SH6i0RzPftpb6ZHEfiNa1Z1qUT+kAkMOsZKuNqzOCW1BL+8VYhQACsoJIY9a+WkVT+IqVKTKZIQkvQVJZnJvakdOSRlLa6Dg/G5iFg3Dg/mxj1ngmI+bJChb8f1MeNfD6CQQ30jMX2j1v/AMPElUqxoTewvQRl+nMzVc9XWukF3tqH1/AB5xj/ABXjTJluL/TsDQ06uY61MrxWjkP/ABFw3/SdiziujmkZ88+12vIeJTFt8xRcmnSAkyJiUBedICnIGYZixZym478jGz8TSSEy0ixD6aNrrHOJlqJYAkx0xjPY/D4haugoT1pHafBuJVmy1I/GtHFSMM7IFVki2nJ949F+GeFqQsFQYsHrV4z/AFszF8a675QSnbyjzf4vxC1r8IVl3OYv1P0eTx6ynDEpYgWtb/EcB8U8HWFFZSEh6M6lGxrcjsPKMuZlO1zPC1zAQ4YdaF+cay0jcn0jHwMklZKgp3uoF/P+Y1SIr9PiefpONogqJGIxkswhQ7QoYDCCJWsVU5+0WJI2Aip9RWHjZSSsupKdKu3P6QY7T4K4akrcTkkjVAI7ZmEc0nCqM0NLKg+yvdJHrHqfw9hwEpKkqFAQ6ia9lERtZqda5wtPx4yeI8GSoKzag1vflG6mcm1O/wDMQmKToW6GF1wqV4l8SfC02SpSpfiQ9vtsfeMFGBVXMkJ0YC/nbtHsnH8KCSWvRwAC/UhzsxjnOFfDeZYKvpTYNub39oU/TPVPxYvBeEeG3iWRTYVuR59o9g+H8GJMpCAw1PXWMTAcOAmuR9LMPQR0KsSEliRD936n4NzB4z+PYNM6UpCg9HHWK53E0JYv9ohL4mlRZ9IfUOV5hxjhDj5am/tIpWu3tHKT+GfpIIU9ece1cU4ekkWu46msc9xn4c+aApIOYXAHtWI87DyVifB/ApaSFKr+ag849Kw2HSACA/Nvb9vOOa4Hw6YhsxJYO9HS1gwsOReOpkrYOVc7M/Z6wp/17p30JSlxY+v2jn/ijBymKlEJOnhDvsCd46CXOJH0ltyzekRxsnMlnAPUpHkCPeNPH0h5AAkrLKf/AHBL+YJi5faNziuECCSlRrtlPZw58zGHMd3L94x/S/xXKDQxESaE0QpFoUPChgLmO5iSDEWiQgIRKMx/Asg0okPHqXw7IUmSM6syiNj94834YVFQCctd29jT0j1Hh7plpBLltP5aOjjrWdntfNtb7+kBFadc3LxH96doJnTqagdgPeAJ69QGaujnzsIqgQMOk2U/J3/7VERVjJgQKJc2AH44HbvDJxrDxJJGoo/v9oFViEqXULZrEU/5QeMHkvw7AFZIPq0cJxb4vPzFVDC3teOtxUxKE0FC7kH2jyfiiRNeSVBC0KUUk6gl2PeDZPdEnl6ac/4jq5mDo8Pgfiw/OSXcPYbc446dw0pUElYJO1oOwUv5TpCgVroSLJS/uYPOVV/Oz69y+YJksKBoR+ND8PnVyrYnlr1GneMPguJeUhBFgKkkVg+esAMCEv2SSdX07NCkRrfUpLVIA2F/M18mjPXMDuBTZqebfm8Zk3iKRULIDN4QSD/8qnvAY4sAalQI/wBxDHcHTmD2h0a6jDThoAOqj/MEqVuKHYv7RzcjiCFsQOhFSD/SaV5PX2GnhcWm3uGrt1idVHJ/E2EQhZY3fSv/ANfvHPx2PxVNDt7/ALs/rHJqGv5/Mc/f1fKpoaJtDNEqRhomRDQyCARICGETAgA/g83LMHhBrY/s0ejycSSgElumn50jzDDTCk0jtOE4pSkVNfL7xpzfSL9GYybm0PU/l+lozsRONgzdnP7fzFy3JJrzc09IBxBAc1byfprDnSanInG3h7U9LmGl4soWArnZIA/zGOcUoKDU3b2Gg940MTNStN/EzFufO/tGk6Sp4xxFIcVS1i701PWOJ47JExWcFlXcRvcRwuZwSGteMLGcOABL+R9odp8+mAvCrdySecHYFAlqzHxK0f8AaG/0ZAqovEEYB/y8LV266zh/GTua3At2AjVm8SWoBMpYfZIcbdj6RyOFkMwesbGCmoRvmu+8LU2NVc1QSErKXNaABz00PT1gb5h1DEc/tAS8eFEglx7QpOINtuenWFpY38LOLg5iPL8MdFhsTTxMeoZ+scpgZxFLj25H943RRDt2tGergHjUzOfDX+39jrGKRBU6/hLHZ/v9ohnf6gOp35tWM7dq5AxEM0XqSLsfO3aKyIArIhRIwoYBgRMRERMQgkmNnh+PKPDQbsKf7R9zGTLLVg3h0tGYOoiKlKuixCjlzB2MY2Kmk6uB5P2/KR1SQkoYEEWjCx+BYxViHOz5xem3Sv2gVWJUDp567wXi8OxNIxsWsa0ioF2Ix2Y8vfeBFYsmjhoGxS2EDfMubbd4rDGGaCatDKxAAH2jHmzCD2hpa6ULV99IfiGr/q6OLj2hHFZtYykTCk8j6wXhEKNaAc4PEa1MOH3jUw6HaMnDA2r2jf4dIctWI6DV4bItHRSUhSCOUZuClAUHnSNqXh3SwEZT6r+OUx0oAloFJ389f5jV4rgVJLkK9/VzGUoQqcMac4gYmIRgNUYUORChAGImIimJgQyTEEyZSS1T+aUimUl6d41+GSGIOUvyr7lormaVroeESzkr2/DCxklxGhw6UWcv3iOMlRvefTNyOMlCx/PKMLiOEGqXHYD3jq8Ygi57xnTZY/p5/j6xMKuNnYeujdRSAp2F/pL/AI9o63G4EAOwf83jKnSbgjk9QQ+vSLwSuXnylGjde0KXLDsfaNkYUZspu2vT/EN/owVFzqeQufMwz1lysO9uWn8RqYfDgVPpX2gzCYdI/S57W3paCkyXIoQD5HyeGm1XhZI/T7R0vDsOwGpMBYHCDkw2jdw0shujmMelQdhMH38o1ZcpQH4YpwgpaNGXasKYtzXE/m2Z9XZvUmOfmSK3HePQMfgBMSzZhsfx45LiHDymglqOwALdefeJ7gjIKRu/QfvFaoJmYZQLEAf7iB6GKVy+Y8wfaM1qVQ0SVDQwolpTqT5fzF6MOP6vRngdCQdW6xp8Ow8wGiSQbsyqbgQQquwPClKIIDjkW9xHacF4aEAOovzgLg2BALlknUMR5g27R0aEUjfiYz+oTzSkZWILmNKYpjGViV1cBiKt9orrabJxSnp09YyZ6FA0+nv50rGxNIzkmxBDHf8AwD5QJMRUDd2PO7RCbArKoyHHL+TAGKwQJJLDVmL77iN8SKfbfpAuIkMNTamo5iNIhyE/DB6A8j6/v5wZhsEFJWQLmhOjmp8jGqjBJdRSNwPzv6wVLw+QAAChoNIYZH/l4FEm130drk2/mLk4NgSNNbB/vGsnDpzVsDb+7c/msXGQ1NLfd/zaFQDw+HZKTu3mwLe8bkiUHCqWr2cmApRBpcUe1WNx+aCJ4TO+WtaUrer1bfWM2kjbw6R+doNShzSwjOwslmHiF7V0uSaPGtISWYt0BfzaDFQyT5/msZ/FZZKTt3PoBGz8vb2gLEo1U3n9zSF/huBxsgP9SfY+TPAKwN36fzHV8TQkGzcnS/YBLxzmISnZfenuIysw5QRhomttj5/xChGbCgXKcw5VbsY6Lg82WWy5yNU5Zf3aMvh2Gc0mBXQqSfSsdbgMClg6yf8AiexNzF8T2jptYRiHALcyD/iL1qEDKdKXc9KfvFKlkh2J6HL7xvKSU6YDr+0ZuKSSXOmzVh588/pDUOrv5CsZk2aoEgOGDgCm4IG/alYLSUTVuQ1lOBW5tbQiHw25INgwt4aU3MCzJ5UaLexAIIdqmr3vBBmJYvuynZidH589Yg6JnKDbDTrAU9RDba8tiNr2i9YPQ9Xf8p6xnYxakg5QaMSCNrlrgaNz83qcX4ebUPclj1/kMe0OssUpOzvzFftAU4s6kmzW0b7h2gtUsFZ5FwOoD+59IelhSZgzLJ+lJSG3JAP/ANjFxnkgOanM/wDbV28jAGDmKAD6qVm5mg82SB57Rd81mKjUqLf9xFOghWni0zUpUk0pU7s4fvY9oWGxSwVpBdlZQwage58q9YFxS0pUCKkMku9w1aUev+XiXDyDlUWQgqcvlSS1iFVZgRQV9oSm/JnTDQOohh4UvXV1KLZmFbsX2jZkKIu4NgCxNNWFh1jIw/y/CkKzZRQBIdKSWc+FxUNzgmdiAkUqa65QwLMM2j6sbGHRGz85Iur86CHXMBsQe7ekYqJ9M61APbL4hXYu3m8GSsQGooknQEnyYRnequRDiGHQR9JPJn9b+UcpxWSlP0y1IHNBr0JLx2OdqBn2JP7OIw+L4BJLulJ1CSr/APQHmIfXuE5Ayw9x6w8HzJIB+k91P7fvCjI2jwrAEscyS1foSs+ZSPcx1OBsGp2APk1o5/hXB0MF5s+w+WED2J9RHQ4WWAGCcvQfcVjbn1E/0Vl3P29YpmSwNz0B+1oqxU3Ldm6O3XaMXHcUmJBKUZ20S49G9Hi5SonFISX7hvq7B/1fvrHP8Rw/hOVKg7ByHDllAMSxZhzrGwjiedxMT8sgeIEsANC5Ayu9neh2ijE4oTE5QoKzUBZmoXoPp1GhqDWKpOemomJdQUhiHDqZiCCqmoJ/axgnAHN4Fm7voKsQGNf8xf8A+WkELQEuGVlO7DKMxNqHS5PYtGFUQScyc2jg5TpYWf8ANszRZwxJzD6iA/f3HeBZii42CqvoCNDs7doMCX8WrVqQ7GvR79oqVIFAoO1eRtdxexg0YESgFRFKlmFBS3pXzhpiSQCWNR7pI6j9hFxkMTlve4qKkdwfcxLCUSkgaf8AF3B6VDd4WjA6El+ZJD3yvW24SP8Aui8YRnUc3iYAlxUsAXajmv7CkWyQ1j9RUTRqW62+0CYta1LygZgkEqALAF2Ac/3M3+0waMQS0sAIcnMUrAagYitg9BWjt2iuRipjKyzSyQkqDeJYNAQzhmAPWFLkKbMoklwAEipUo5R4iGKhStvExhpmDQ6GBSSCykkBROYMovQVChyeHAOwyUzDlzOEVcnIVBycoAIYvtQZhWNPA4ZM0/M8ZUKAGY4DckuA1rHrAMlKQsh0rJZpgD6JGVmKcwyvueriC0YlAITnSFj9CSWB3UEnKBXUG8OiNjD4JSakqJr4nZxoFM1f7osVLP8AUoerd/8AEZMjjsoKYzpLWJS5rsFamDkcQlrUXSQB+ohm6uadxGXWNIuTMXYEt/UQ/bwu8UY+ew//AKBJ2Ukse1KwVKrVKwsbAu3kYhilkAuKb1+1YOb/AAdRyuKmFyXD/wBoKfQw0XYySi6ab6t3AHqIUGJdJhMLlAZRHke1gBF07EhPM6Oz+sQnJORkjKd9upMZ8uWWITMK1a5Ckep084O+suQ+Z6Xf60FVULrY1IPdJPkYjiZwCbAA3ej9KHzPmIoRhpiahKVdVOa6OQxECzZM1BJJypN0unw7qYBiDqLkRpwnosVhJZS4QkEWqbA1Dpd/vrHNYjCTBMBC8ocJCVG4pVst3cvrG2VlX0gm4KXYN/VUgjahYW6yweFS7udhYgd03u7fzFWpijhkyaf1JUGfqK1MbDKILiotrR9j7RHD4YyiCS4rVvvbsYuxMzbmxA/DEKwJO8VC6Tr066gP1gDEEAgEEKcsU2tS+mnlBpnKyg0JFFJ3F3BOveKiRU1q+rs408onTxXiE+EEJ7sXa7NdjXzhrJDf7gORYgHoCT2h/nhmIygFnDqSQqjl6iz9YitP6gS+a1N3FdqabwtPE8MutqAOH0IOvm56wpeFJSE5qhRLJqSol2fkXr3iwoJJOZmyj+fc+WsXYacAXQwFhRyTSjm4H5o5owPM4ct1LDkqruBlp4VGluWx0EZ2PWC9VEKoQW+oByqtt9I18RPzMQoG4KqtQksG8oycTw4rUkhJZIoCnxKUCpiA+hLgE+gMVKmxHDY5ZUJYyqmJ8agWHhsAkFiSSQS+Wlo0pGBkJQCUZWoFsnOo1cA3ANdO9TAksiWghYJJSVeM/RsHDhIJLMKMbRD/AEylk1lqGU5rkozBh4RUJNuVeUWlpiYy8ssA0qUBlgu7ZhSnR4vxeJ+WRmmhBdhmBd7/AF1Se22lQMxElCSlJQuZMIIVkzfLezEOGbbLF8nElIKSAnZCF5+pGaqTuKm9ow7jXmjsBi1KUHmJVzy1a7pNq7sOW8bk1dLUN3DRzEjDKBzywCDVmJO5Ka9aFhGxhsQojRtRb009YjnrF2ayuM4ZiVAev4fOFGjjJJUHCSRYh6joP5ho3xl8W4tSQnxAq/tD+wb1/iAlTF5WEtHJHhoOYJETVQ+FlEPVqA3cqNSen+M/HSlzFBHzSlR/pBLf8aA83jHdrTF0zEqT9SUj+0gJI5gPXziM/FqNWUnZRCTdvpUm35WCsHIMtIClTlHdQf1CvW8UYqc/0hjYKyj0c25R0c/GNCmSSGLJ/UxYuwdhqQW5/YGJnJYkMfQeWn8xnpUVk3FFDUMSybGxq8E57DanakLqiCc5UA5ofymkVqNTowzeWsOgsQzMacjyaIzCxcaOG2G3+axmsPMmsObFJI0NgW5gjz6xJRIcKNLP/SQ1fv3iM2yi1rV8+1fV4aYsMAdSX5BwPQEGEpHFkCvZQs4u3Qv6ecwvKcoZrgtpRuYNQT0MRS+VIJpmdzysD5ehiC5ZQdgHCdWBIrSzEkdDpCBpUx8xYtmCGruCezn0MXS8Oh/GbMPqsdPCOZ31hSSC4fKX+p2Phdy/nTnFwxEuoKQWN6irGrvdnLhrtAEVoBOaWoqALX1BLsRzYOaMIeZiCKqNSLM4F6F7iKUSUJ/UQwIAVUAWYBuV+UUTijJQvUqHMJq7G5O/8Q59Kq58x1BzVRDG9U7k2AJH/HzJwk1ZUolQYk5WBLDV1J1YaPpGamak+MFSjd2FMzuwIuwIfnSLMLIdTrKgUqJGbKUOXYtlUSoU9I2jNuguGQCxFQCavqQfYXgP/WFPhyukfUsF0ltnOamzQ8+WlYzKWsLYqCBV2uU1cjergbQKvGTQEqKkKRYKBKiVbXBBNQMx0jPtfI5MtM8OhYzaqSpQUobEjLX8q8G4bCKQ3ic3BJIPmSYxBhlrAVKM1BrRSC76gNbejg8tNDAY5RSy6/3hRBB3Yh0nv94wrVsyCV/2rG+o+4hobCqP9Q7s55giivTesKOji+mXU9ggAkVZzclz4dAPxusDrmeE5GD3UolAbUkip6coFxOJJLBkp0cEkvqdDXZ+kTwPDgPFMKpirhKRlHLKNepYCsZcq6E4TDE1GYpo5VmlpY7bjrteAuKJTaUpKzYjMaszhNQKU1842llgzBND4WApyZRJPOOcUrNNqXSCGcEkGtGUXBYmtH7RvGVEo8IBIYKZRPhuwrzftDyFmqgXr5djUO8VY+e5SNARoaaxdJCc1GcBgTeuhMKnFjs57kdNvy0RxE16A9tgXo3q/KJp8TnYMQaH9iCLQJOSApLijjtahPVj5xFXF2JVlQOQc9HBV0oB/wAoFngTJQILEsANydyRSiR5Q8ya+ergslX9pYj3YxQpRKU0YFqgBgba0a5JP9Q1hGN+X/0gnODVgoWch/LSt80RUpQIYkOGP9qxQ05g16g1gAMiU4SpDlvE5GldxdngmVMzkLJBFM1bpAIcga6ONoRr0zwlbKZiMz3NP0+hiRmrIBCXLvmNh9OtrRn46bX62FjRy4LGnf15QZ/qks4cAjyFj36vYwEjNQVeF+ZLV3ZzAU5KZagfESGJJ8RcPTYDcn1gvAZykqAy1NyHJ3c7Gv40B42Wo/8ATBPM0DnZzfbtFyJqqXOGZlBTOCEpcOPCyuYGw2vDYtZlYhJJKiuxSalgQEg2Ghd6QLMlrTMUHSohg1i12Ym7bbQXj5ZXKC8gJH9wcUBYFqvoRz2i/iXUYLG+HKspUArw0K1BQerAUbRT22hsUEzApBKH/wDbAzAHUu7Dm1eb1zOBrzJZJASxzA5AFHUeLYtVtb1ruSRmoXKdGO2rJSMpbsR1Lx2rlymDX8kvmBQSWV80hz/SzMDSxEdFIaZ4gvxH9T/Va7VJ5gbdsziuAlBavmZ8kwspqgGlVAjMNCFANbd4qwWFTI8KVqWg2LZm5tVhXUERjY0dJh8MWY5SNrjqzUP7woBlYhi1LUYBKm7XHTnyhocsKylw/D/MJIUzfUsE9MqXsG115C+vJkoTRKXcVU4BbmSXPZ4FCmGROZtKEj/PUudoUuVUMZgL1JY+YDsPbWK5pUsXh05FZUAPWrgE9a+bGOTxIyMxy18IoWoWADWqfOOvxmFCkEZ2pdglQ3Ds7dtt449eEWtRVMR4QykgqcroGqkWYZtz3jeMqI4cnOpwGSm5JDHl51aDkgAHxgvYs78qxHCOSUsAEjQAAbgHd250hGYr6XcdHfqQKHmGhWCLBPDAtVv0uQQ/5cQPPnhmfQFjQpewHI6dOr2hJQau2hGl2obFzAs9TTMzBxd6UFmBv7ivKM2kVzUlQIHhBJzUOpZS3FctD5wPKnklBCikBgTcqKjQJ2D0rtCGLLkUSKOal62fRNCYrloUoLMssoD62d1Elm5fvCUPnYuYuWWPjDFnahoevi823h52GSgAZiHJDq5GxoGooWtWM+VOUhASsqClrUQ7EUNmuBl6QXwsfPllBW0x89RXQEAFg4Avo0EmEZEhQSDlB8WUr2T08+dIukBgE3JB8KUsyana55+r0GlqyTiiWxUDlOYiqKu5VRjyrB8mSCSoM9HUT4TyYFj0D3G0VSKVNCAzF6AAVJNmTy96mKMQoKCWGZlNlSSAktqoOS76bGsFTsGtjldSm0TVrFgxLNFeCVMKJifpUlvDZiLUuajleHE1m8bkqHy5iUUysSKgN4WZtjFJf5bKXcKCaOSCKpI9QSRpGtxKQRKUlP61kjkFAk+oivDYApSFlQDqcuLv0cKG+/Z40xGofD8tCwl5S1EsXH0lQLUozkAHVq6x0KcMlJCg9mVLC1qSG0I+kK1u/PSKPhzD5MwC1UKklOUBmOhA8PrYUDGFj8UlRZBmBNgUpcVL+EUc68rnc491rzFuG4gFunMg7EBQI0+pQbsYBmpWhRdPzZZ1SohSTcHKqhPkYinxZSok5aJVMKyrkysoIff7QUJgWKlD2CkqIt/eHt/cWMZLMFKIolKgP0qSARzdvRoUSRh1g1L9g3dnIPSkKFoE4XEqAcHQbbiNIyRkzGpBo5J02NIeFGiQnGJQVKUCAfC/k7e0c+qYfnlLnLmQlrhsqx7JHlChR0RlV2ESPnAaOadj5QVMlgAkBoUKF0UZc4kpqTYG5FXbS0A4TEKK77bdYaFGdaRZilES1kULs/JyPaBcQgZZHIk0pXM2nIQoUSodhJQK0OAWQgjyJ94CxIaa4oXSe5EyFCiuPpUVxfDpdJapJJPPKk+5MDJnqMgKfxDIx2zFj6QoUVPkJrcGmHOA5L1L11GprBEkNNWA7MmhJP6hZ7QoUVE1fMPhfUAEf8E/vD8YS0v/AI+41hQopE+isAoqCUk0UVA6FqG4qK7QsXNUVEOWzqTtRLsKaQoUcv6fXRy0JslIAZIqa0v3jLnSw6P7iUkaEAAilr6woUR/AEwyjkJeoIHpChQocOv/2Q==",
                  "https://via.placeholder.com/300",
<<<<<<< HEAD
                  "https://via.placeholder.com/500",
                ]}
              />
              <Post
                description="conar killed and ate my cat"
                userName="kabib"
                pictures={[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/200",
                  "https://via.placeholder.com/300",
                  "https://via.placeholder.com/500",
                ]}
              />
              <Post
                description="hello world"
                userName="Alice"
                pictures={[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/200",
                  "https://via.placeholder.com/300",
                  "https://via.placeholder.com/500",
                ]}
              />{" "}
              <Post
                description="today my cat had an acccdent "
                userName="perna"
                pictures={[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/200",
                  "https://via.placeholder.com/300",
                  "https://via.placeholder.com/500",
                ]}
              />
              <Post
                description="conar killed and ate my cat"
                userName="kabib"
                pictures={[
                  "https://via.placeholder.com/150",
                  "https://via.placeholder.com/200",
                  "https://via.placeholder.com/300",
                  "https://via.placeholder.com/500",
=======

>>>>>>> c8dad5524bf382733b34e7d9af001d6b6321e75a
                ]}
              />

            </PostsContainer>
          </div>
        </TwoColLayout>
      </div>
    </>
  );
};

export default Home;
