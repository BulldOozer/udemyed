/*body*/
body {
    position: relative;
    width: 1219px;
    height: 1371px;
    background: #FFFFFF;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

/*Container*/
.container {
    width: 100%;
    max-width: 1219px;
    margin: 0 auto;
}


/*Header*/
.navbar {

    width: 100%;
    position: absolute;
    width: 1219px;
    height: 56px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #343A40;
}

/*navbar_logo*/
.navbar_logo {
position: absolute;
width: 42px;
height: 23px;
left: 16px;
top: 19px;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
}

/*nav*/

.navbar_link_port {
    position: absolute;
    width: 85px;
    height: 19px;
    left: 82px;
    top: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}


.navbar_link_reit {
    position: absolute;
    width: 61px;
    height: 19px;
    left: 183px;
    top: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

.navbar_link_sup {
    position: absolute;
    width: 64px;
    height: 19px;
    left: 260px;
    top: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

/*jumbo*/
.jumbo {

    position: absolute;
    width: 100%;
    max-width: 1219px;
    height: 342px;
    left: 0px;
    top: 56px;
    background: #E9ECEF;
}

.port {
    position: absolute;
    width: 374px;
    height: 84px;
    margin: 64px 796px 194px 49px;
    font-weight: 300;
    font-size: 72px;
    line-height: 84px;
    color: #212529;
}

.text_jumbo {
    position: absolute;
    width: 635px;
    height: 58px;
    margin: 156px 529px 128px 55px;
    font-size: 16px;
    line-height: 19px;
    color: #212529;
}

.button_job {
    position: absolute;
    padding: 12px 20px;
    width: 161px;
    height: 24px;
    margin: 242px 963px 64px 55px;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    position: absolute;
    width: 201px;
    height: 48px;
    background: #007BFF;
    border-radius: 4px;
}

button {
    border-radius: 4px;
    transition: border-radius 0.5s ease-in;
}

    button:hover {
        border-radius: 16px;
        transition: border-radius 0.5s ease-in;
    }

/*cards*/

.cards {
    margin-top: 32px;
    position: absolute;
    padding: 32px;
}

/*profile_card*/
.profile_card {


}

/*    margin: 430px 719px 707px 55px;
*/
.profile_card_header {
    width: 445px;
    height: 48px;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px 4px 0px 0px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.profile_card_header_text {
    padding: 16px;
    margin-bottom: 20px;
    width: 166px;
    height: 19px;
    font-size: 16px;
    line-height: 19px;

}

.profile_card_name {
    margin-bottom: 12px;
}

.profile_card_spec {
    padding: 12px auto;
}