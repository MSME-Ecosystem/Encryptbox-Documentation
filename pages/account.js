import HomeLayout from "@/components/Layout/HomeLayout";
import Sidebar from "@/components/Layout/sidebar";
import Script from "next/script";
import Link from "next/link";
import Code from "@/components/Code";
import Feedback from "@/components/Feedback";

export default function Account() {

  const request = ` 
  curl --location --request POST 'https://dashboard.encryptbox.co.uk/api/v1/live/createaccount' \
  --header 'token: putyourpublickeyhere' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "reference": "e87f2dxvdrwew45345dd432",
    "first_name": "John",
    "last_name": "Doe",
    "mobile_number": "+1234578990",
    "email": "johndoe@doe.com",
    "address": "John Doe to the Moon",
    "bvn": "0987654332",
    "nin": "12345789"
  }'  
  `;
  return (
    <>
      <section
        className="doc_documentation_area onepage_doc_area"
        id="sticky_doc"
      >
        <div className="overlay_bg" />

        <div className="container-fluid pl-60 pr-60">
          <div className="row doc-container">
            <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
              <Sidebar />
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="documentation_info" id="auth">
                {/*doc*/}
                <article
                  className="documentation_body doc-section pt-0"
                  id="doc"
                >
                  <div className="shortcode_title">
                    <h2>Users</h2>
                    <p>
                      <span>
                        The EncryptBox User endpoints can be used to create
                        users and also have access to user details
                      </span>{" "}
                      <span>
                        The EncryptBox platform includes server-side API for
                        this.
                      </span>{" "}
                    </p>
                  </div>
                  <div className="shortcode_info pt-0" id="createUsers">
                    <div className="shortcode_title">
                      <h4 className="s_title">Create Users</h4>
                      <p>Purpose: To create Voucher Credit wallet users</p>
                    </div>
                    <div className="shortcode_title">
                      <h4 className="s_title" id="tab2">
                        Request Details
                      </h4>
                      <div
                        className="alert media message_alert fade show"
                        role="alert"
                      >
                        <div className="media-body">
                          <h5>Request URL</h5>
                          <p>
                            {`{api-domain}/api/{version}/{environment}/createaccount`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="shortcode_title">
                      <h4 className="s_title" id="tab2">
                        Header
                      </h4>
                      <div
                        className="alert media message_alert fade show"
                        role="alert"
                      >
                        <div className="media-body">
                          <span>token: 1ffg4XXXXXXXXXXXXXXXXXXXXXXXX0jMnH</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="media notice notice-success">
                      <div className="media-body">
                        <h5>Note</h5>
                        <ul>
                          <li>
                            <p>You can only create one user at a time</p>
                          </li>
                          <li>
                            <p>
                              Refer to <Link href="#">Get User API</Link> to
                              fetch the created user details
                            </p>
                          </li>
                        </ul>
                      </div>
                    </blockquote>

                    <div className="border_bottom" />
                  </div>
                  {/*accordian*/}
                  <div className="shortcode_info" id="accordian">
                    <div className="shortcode_title">
                      <h2>Accordian</h2>
                      <p>
                        <span>Welcome to Docy !</span> Get familiar with the
                        Stripe products and explore their features:
                      </p>
                    </div>
                    <div className="toggle_shortcode">
                      <h4 className="s_title load-order-2" id="toggle">
                        Toggle
                      </h4>
                      <a
                        className="toggle_btn"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        Super Professional
                      </a>
                      <div
                        className="collapse multi-collapse show"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body toggle_body">
                          He lost his bottle arse fanny around do one cheesed
                          off crikey bevy mufty the full monty nancy boy cup of
                          tea spend a penny, golly gosh what a plonker.
                        </div>
                      </div>
                      <a
                        className="toggle_btn mt-1 collapsed"
                        data-toggle="collapse"
                        href="#multiCollapseExample2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample2"
                      >
                        Dashboard
                      </a>
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body toggle_body">
                          He lost his bottle arse fanny around do one cheesed
                          off crikey bevy mufty the full monty nancy boy cup of
                          tea spend a penny, golly gosh what a plonker.
                        </div>
                      </div>
                    </div>
                    <div className="accordion_shortcode">
                      <h4 className="s_title load-order-2" id="accordions">
                        Accordion
                      </h4>
                      <div id="accordion">
                        <div className="card doc_accordion">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Super Professional
                                <i className="icon_plus" />
                                <i className="icon_minus-06" />
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body toggle_body">
                              He lost his bottle arse fanny around do one
                              cheesed off crikey bevy mufty the full monty nancy
                              boy cup of tea spend a penny, golly gosh what a
                              plonker.
                            </div>
                          </div>
                        </div>
                        <div className="card doc_accordion">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Online Marketing
                                <i className="icon_plus" />
                                <i className="icon_minus-06" />
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body toggle_body">
                              He lost his bottle arse fanny around do one
                              cheesed off crikey bevy mufty the full monty nancy
                              boy cup of tea spend a penny, golly gosh what a
                              plonker.
                            </div>
                          </div>
                        </div>
                        <div className="card doc_accordion">
                          <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Amazing Support <i className="icon_plus" />
                                <i className="icon_minus-06" />
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body toggle_body">
                              He lost his bottle arse fanny around do one
                              cheesed off crikey bevy mufty the full monty nancy
                              boy cup of tea spend a penny, golly gosh what a
                              plonker.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*accordian*/}
                  {/*notice*/}
                  <div className="shortcode_info" id="notices">
                    <div className="shortcode_title">
                      <h2>Shortcodes</h2>
                      <p>
                        <span>Welcome to Docy !</span> Get familiar with the
                        Stripe products and explore their features:
                      </p>
                    </div>
                    <h4 className="s_title" id="alert">
                      Messages Alerts
                    </h4>
                    <div
                      className="alert media message_alert fade show"
                      role="alert"
                    >
                      <i className="icon_volume-low" />
                      <div className="media-body">
                        <h5>Your Message Title Here</h5>
                        <p>
                          Do one don't get shirty with me naff only a quid the
                          full monty at public school burke Jeffrey smashing,
                          blatant ruddy fanny around Charles.
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="icon_close" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="alert media message_alert alert-danger fade show"
                      role="alert"
                    >
                      <i className="icon_close_alt2" />
                      <div className="media-body">
                        <h5>Key Warnings</h5>
                        <p>
                          Do one don't get shirty with me naff only a quid the
                          full monty at public school burke Jeffrey smashing,
                          blatant ruddy fanny around Charles.
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="icon_close" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="alert media message_alert alert-success fade show"
                      role="alert"
                    >
                      <i className=" icon_check_alt2" />
                      <div className="media-body">
                        <h5>Packaged with useful shortcodes</h5>
                        <p>
                          Do one don't get shirty with me naff only a quid the
                          full monty at public school burke Jeffrey smashing,
                          blatant ruddy fanny around Charles.
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="icon_close" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="alert media message_alert alert-warning fade show"
                      role="alert"
                    >
                      <i className="icon_error-circle_alt" />
                      <div className="media-body">
                        <h5>Your Message Title Here</h5>
                        <p>
                          Do one don't get shirty with me naff only a quid the
                          full monty at public school burke Jeffrey smashing,
                          blatant ruddy fanny around Charles.
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="icon_close" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="alert media message_alert alert-info fade show"
                      role="alert"
                    >
                      <i className="icon_info_alt" />
                      <div className="media-body">
                        <h5>Information Message</h5>
                        <p>
                          Do one don't get shirty with me naff only a quid the
                          full monty at public school burke Jeffrey smashing,
                          blatant ruddy fanny around Charles.
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <i className="icon_close" />
                        </button>
                      </div>
                    </div>
                    <h4 className="s_title" id="notice">
                      Notices
                    </h4>
                    <blockquote className="media notice notice-success">
                      <i className="icon_menu-square_alt2" />
                      <div className="media-body">
                        <h5>Note</h5>
                        <p>
                          <span>Easy peasy</span> car boot hunky-dory brolly
                          blow off <span>down the pub</span> show off show off
                          pick your nose and blow off matie <span>boy</span>{" "}
                          cobblers spiffing, bleeder the full monty excuse my{" "}
                          <strong>French</strong> say bugger cack barney.
                        </p>
                      </div>
                    </blockquote>
                    <blockquote className="media notice notice-warning">
                      <i className="icon_ribbon_alt" />
                      <div className="media-body">
                        <p>
                          <strong>Admins:</strong> can choose to require users
                          to enter their details by enabling the checkbox
                          Require Name and Email address beside User Details
                          option.
                        </p>
                        <p>
                          <strong>This will:</strong> automatically register
                          users to your site. User has to enter his/her Name and
                          E-Mail in the following fields
                        </p>
                      </div>
                    </blockquote>
                    <blockquote className="media notice notice-danger">
                      <i className="icon_ribbon_alt" />
                      <div className="media-body">
                        <p>
                          To do this, simple navigate to{" "}
                          <strong>
                            wp-dashboard-&gt;User Frontend-&gt;Settings. From
                            Settings,
                          </strong>{" "}
                          open the <strong>E-Mails</strong> page. The first 2
                          fields are all that you need to configure the email
                          notification for guest users.
                        </p>
                      </div>
                    </blockquote>
                    <h4 className="s_title" id="explanation">
                      Explanations
                    </h4>
                    <p className="explanation expn-left">
                      I assumed I could start "recording" then click around
                      different areas of the site and watch that unused number
                      go down as different pages with different HTML are
                      rendered, but alas, when the page refreshes, so does the
                      Coverage tab. It's not very useful in getting?
                    </p>
                  </div>
                  {/*notice*/}
                  {/*tooltip*/}
                  <div className="shortcode_info" id="tooltip">
                    <h4 className="s_title" id="tooltip-t">
                      Tooltip
                    </h4>
                    <div className="tooltip_content">
                      <h6>What is an Extension?</h6>
                      <p>
                        So I said cup of tea Queen's English owt to do with me I
                        don't want no agro cheers cheeky bugger fanny around
                        baking cakes down the pub happy days,{" "}
                        <span className="direction_steps">
                          <span className="direction_step">James</span>
                          <span className="direction_step">Bond</span>
                        </span>{" "}
                        daft a load of old tosh buggered he lost his bottle lost
                        the plot he nicked it a blinding shot.{" "}
                      </p>
                      <p>
                        <a
                          href="#"
                          className="tooltips"
                          data-tooltip-content="#tooltipOne"
                        >
                          James Bond David
                        </a>{" "}
                        mufty quaint no biggie cras baking cakes barney
                        bamboozled, what a plonker bum bag he legged it young
                        delinquent knees up Eaton the full monty arse over tit,
                        my lady buggered happy days amongst bugger all mate are
                        you taking the piss brolly.
                        <a
                          href="#"
                          className="tooltips"
                          data-tooltip-content="#tooltipTwo"
                        >
                          William bite your arm
                        </a>{" "}
                        off a blinding shot matie boy old gosh barney grub
                        dropped a clanger.
                      </p>
                      <p>
                        Tosser are you taking the piss cuppa porkies pardon you
                        butty lost the plot William bog lemon squeezy bite your
                        arm off Richard, say what a load of rubbish cockup I
                        don't want no agro twit young delinquent cack bodge a
                        bonnet.
                      </p>
                    </div>
                    <div className="border_bottom" />
                  </div>
                  {/*tooltip*/}
                  {/*table*/}
                  <div className="shortcode_info">
                    <h4 className="s_title" id="table">
                      Table
                    </h4>
                    <div className="table-responsive">
                      <table className="table table_shortcode">
                        <thead>
                          <tr>
                            <th>Sample ID</th>
                            <th>Reading #1</th>
                            <th>Reading #2</th>
                            <th>Reading #3</th>
                            <th>Reading #4</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Timeline</th>
                            <td>16</td>
                            <td>94</td>
                            <td>74</td>
                            <td>56</td>
                          </tr>
                          <tr>
                            <th>Sample #1</th>
                            <td>24</td>
                            <td>19</td>
                            <td>44</td>
                            <td>74</td>
                          </tr>
                          <tr>
                            <th>Pomodoro timer</th>
                            <td>12</td>
                            <td>63</td>
                            <td>82</td>
                            <td>66</td>
                          </tr>
                          <tr>
                            <th>Tags</th>
                            <td>95</td>
                            <td>46</td>
                            <td>62</td>
                            <td>24</td>
                          </tr>
                          <tr>
                            <th>Tracking time</th>
                            <td>19</td>
                            <td>66</td>
                            <td>31</td>
                            <td>99</td>
                          </tr>
                          <tr>
                            <th>Keyboard</th>
                            <td>57</td>
                            <td>15</td>
                            <td>57</td>
                            <td>9</td>
                          </tr>
                          <tr>
                            <th>Shortcuts</th>
                            <td>69</td>
                            <td>46</td>
                            <td>16</td>
                            <td>33</td>
                          </tr>
                          <tr>
                            <th>Manually</th>
                            <td>18</td>
                            <td>93</td>
                            <td>84</td>
                            <td>57</td>
                          </tr>
                          <tr>
                            <th>Timeline</th>
                            <td>92</td>
                            <td>10</td>
                            <td>69</td>
                            <td>35</td>
                          </tr>
                          <tr>
                            <th>Adding</th>
                            <td>4</td>
                            <td>87</td>
                            <td>51</td>
                            <td>22</td>
                          </tr>
                          <tr>
                            <th>Sample #2</th>
                            <td>24</td>
                            <td>23</td>
                            <td>85</td>
                            <td>34</td>
                          </tr>
                          <tr>
                            <th>Pomodoro</th>
                            <td>92</td>
                            <td>6</td>
                            <td>67</td>
                            <td>65</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="basic_table">
                      <h4 className="s_title load-order-2" id="basic">
                        Basic Tables
                      </h4>
                      <p>
                        Since Docy is based on Bootstrap 4, so you can safley
                        use Bootstrap's table classes to style your table. We
                        also added more table styles and functionality to our
                        template.
                      </p>
                      <table className="table basic_table_info">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="basic_table">
                      <h4 className="s_title load-order-2" id="strip">
                        Striped Table
                      </h4>
                      <p>
                        Use{" "}
                        <code className="highlighter-rouge">
                          .table-striped
                        </code>{" "}
                        to add zebra-striping to any table row within the{" "}
                        <code className="highlighter-rouge">&lt;tbody&gt;</code>
                        .
                      </p>
                      <table className="table table-striped table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="basic_table">
                      <h4 className="s_title load-order-2" id="hover">
                        Hover Tables
                      </h4>
                      <p>
                        Since Docy is based on Bootstrap 4, so you can safley
                        use Bootstrap's table classes to style your table. We
                        also added more table styles and functionality to our
                        template.
                      </p>
                      <table className="table basic_table_info table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*table*/}
                  {/*lightbox*/}
                  <div className="shortcode_info" id="lightbox">
                    <div className="shortcode_title">
                      <h4 className="s_title">Image Lightbox</h4>
                      <p>
                        A Dashboard is a convenient way to get an overview of
                        the the current status of your tasks and monitorthe
                        progress of your team.
                      </p>
                    </div>
                    <div className="lightbox_shortcode">
                      <img src="img/image-lightbox.jpg" alt="lightbox" />
                      <a href="img/lightbox-preview.jpg" className="img_popup">
                        <i className="icon_plus" />
                      </a>
                    </div>
                  </div>
                  {/*lightbox*/}
                  {/*footnote*/}
                  <div className="shortcode_info" id="footnote">
                    <div className="shortcode_title">
                      <h2>Footnotes</h2>
                      <p>
                        <span>Welcome to Docy !</span> Get familiar with the
                        Stripe products and explore their features:
                      </p>
                    </div>
                    <p>
                      Apparently we had reached a{" "}
                      <span title="Lorem ipsum dolor sit">great height</span> in
                      the atmosphere, for the sky was a dead black, and the
                      stars had ceased to twinkle. By the{" "}
                      <span title="Lorem ipsum dolor, sit amet consectetur adipisicing">
                        same illusion
                      </span>{" "}
                      which lifts the horizon of the sea to the level of the
                      spectator on a hillside, the sable cloud beneath was
                      dished out, and the car seemed to float in the middle of
                      an immense dark sphere, whose upper half was strewn with
                      silver. Looking down into the dark gulf below, I could see
                      a{" "}
                      <span
                        className="tooltip-trigger"
                        title="Lorem ipsum dolor"
                      >
                        ruddy light
                      </span>{" "}
                      streaming through a rift in the clouds.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod labore suscipit{" "}
                      <a
                        href="#note-name-a"
                        id="note-link-1"
                        className="footnotes-link tooltips"
                        data-tooltip-content="#note-link-a"
                      />{" "}
                      animi consequatur. Accusantium quibusdam dolorum at a,
                      numquam deserunt.
                    </p>
                    <p>
                      Lorem ipsum dolor sit{" "}
                      <a
                        href="#note-name-b"
                        id="note-link-2"
                        className="footnotes-link tooltips"
                        data-tooltip-content="#note-link-b"
                      />{" "}
                      amet consectetur, adipisicing elit. Quia quos autem veniam
                      libero! Deleniti nemo quas optio voluptas voluptatibus
                      sint ratione. Id vel error quia ipsam sit saepe hic at
                      amet excepturi ea. Voluptas sunt ratione consequatur{" "}
                      <a
                        href="#note-name-c"
                        id="note-link-3"
                        className="footnotes-link tooltips"
                        data-tooltip-content="#note-link-c"
                      />{" "}
                      optio porro eaque nam quod ex illum modi id animi fugiat
                      vero explicabo illo officiis assumenda nulla rerum,
                      dignissimos sed dicta pariatur quis eum. Beatae ea cumque
                      alias ducimus quos maxime sed, modi illum at repellendus,
                      ex deleniti nesciunt tempore placeat in accusantium!
                    </p>
                    <div className="footnotes margin-top-xl">
                      <h4>Footnotes</h4>
                      <ol>
                        <li id="note-name-a" className="footnotes_item">
                          <strong>Footnote Name A</strong>
                          <br />
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Amet voluptas dicta dolor.
                          <a href="#note-link-1" aria-label="Back to article">
                            ↑
                          </a>
                        </li>
                        <li id="note-name-b" className="footnotes_item">
                          <strong>Footnote Name B</strong>{" "}
                          <a href="#0">[PDF]</a>
                          <br />
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Amet voluptas dicta dolor.
                          <a href="#note-link-2" aria-label="Back to article">
                            ↑
                          </a>
                        </li>
                        <li id="note-name-c" className="footnotes_item">
                          <strong>Footnote Name C</strong>
                          <br />
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Amet voluptas dicta dolor.
                          <a href="#note-link-3" aria-label="Back to article">
                            ↑
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                  {/*footnote*/}
                  {/*can I use*/}
                  <div className="shortcode_info" id="can-use">
                    <div className="caniuse">
                      <h4 className="s_title">Can I Use</h4>
                      <div className="caniuse_section">
                        <h6 className="load-order-2" id="desk">
                          Desktop
                        </h6>
                        <ul className="list-unstyled caniuse_agents_list">
                          <li className="caniuse_agents_item light_blue">
                            <img src="img/desktop_icon1.png" alt="" />
                            <span className="agents_version">72</span>
                          </li>
                          <li className="caniuse_agents_item light_blue">
                            <img src="img/desktop_icon2.png" alt="" />
                            <span className="agents_version">64*</span>
                          </li>
                          <li className="caniuse_agents_item light_red">
                            <img src="img/desktop_icon3.png" alt="" />
                            <span className="agents_version">No</span>
                          </li>
                          <li className="caniuse_agents_item light_blue">
                            <img src="img/desktop_icon4.png" alt="" />
                            <span className="agents_version">42</span>
                          </li>
                          <li className="caniuse_agents_item light_blue">
                            <img src="img/desktop_icon5.png" alt="" />
                            <span className="agents_version">45</span>
                          </li>
                        </ul>
                      </div>
                      <div className="caniuse_section">
                        <h6 className="load-order-2" id="mobile">
                          Mobile / Tablet
                        </h6>
                        <ul className="list-unstyled caniuse_agents_list">
                          <li className="caniuse_agents_item blue">
                            <img src="img/mobile_icon1.png" alt="" />
                            <span className="agents_version">9.0</span>
                          </li>
                          <li className="caniuse_agents_item blue">
                            <img src="img/mobile_icon2.png" alt="" />
                            <span className="agents_version">86</span>
                          </li>
                          <li className="caniuse_agents_item light_red">
                            <img src="img/mobile_icon3.png" alt="" />
                            <span className="agents_version">No</span>
                          </li>
                          <li className="caniuse_agents_item blue">
                            <img src="img/mobile_icon4.png" alt="" />
                            <span className="agents_version">76</span>
                          </li>
                          <li className="caniuse_agents_item blue">
                            <img src="img/mobile_icon5.png" alt="" />
                            <span className="agents_version">76*</span>
                          </li>
                        </ul>
                      </div>
                      <div className="caniuse_section_legend">
                        <p>* denotes prefix required.</p>
                        <div className="border_bottom" />
                        <div className="d-flex caniuse_legend_list">
                          <span>Supported:</span>
                          <div className="caniuse_button">
                            <a href="#" className="blue">
                              Yes
                            </a>
                            <a href="#" className="purpale_btn">
                              No
                            </a>
                            <a href="#" className="green_btn">
                              Partially
                            </a>
                            <a href="#" className="violate_btn">
                              Polyfill
                            </a>
                          </div>
                        </div>
                        <p>
                          Stats from <a href="#">Docy.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*can I use*/}
                </article>

                <Feedback />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 ">
              <div className="shortcode_title">
                <h4 className="s_title" id="tab2">
                  Endpoints
                </h4>
                <div
                  className="alert media message_alert fade show"
                  role="alert"
                >
                  <div className="media-body">
                    <span>/api/v1/live/createaccount</span>
                  </div>
                </div>
              </div>
              <div className="shortcode_title">
                <h4 className="s_title" id="tab2">
                Sample Request
                </h4>
                <div
                  className="alert media message_alert fade show"
                  role="alert"
                >
                  <div className="media-body">
                  <Code code={request} language="javascript"></Code>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Account.getLayout = function getLayout(page) {
  return (
    <>
      <HomeLayout>{page}</HomeLayout>
      <Script src="/js/jquery-3.5.1.min.js" id="jquery"></Script>
      <Script src="/assets/bootstrap/js/popper.min.js" id="popper"></Script>
      <Script
        src="/assets/bootstrap/js/bootstrap.min.js"
        id="boostrapmin"
      ></Script>
      <Script
        src="/assets/bootstrap/js/bootstrap-select.min.js"
        id="boottrapselect"
      ></Script>
      <Script src="/js/parallaxie.js" id="paralaxie"></Script>
      <Script src="/js/TweenMax.min.js" id="TweenMax"></Script>
      <Script src="/js/anchor.js" id="anchor"></Script>
      <Script src="/assets/wow/wow.min.js" id="wow"></Script>
      <Script
        src="/assets/niceselectpicker/jquery.nice-select.min.js"
        id="niceselect"
      ></Script>
      <Script
        src="/assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"
        id="customcrollbar"
      ></Script>
      <Script
        src="/assets/magnify-pop/jquery.magnific-popup.min.js"
        id="popup"
      ></Script>
      <Script
        src="/assets/tooltipster/js/tooltipster.bundle.min.js"
        id="tooltipster"
      ></Script>
      <Script
        src="/assets/font-size/js/rv-jquery-fontsize-2.0.3.js"
        id="rvjquery"
      ></Script>
      <Script
        src="https://unpkg.com/ionicons@latest/dist/ionicons.js"
        id="ionicons"
      ></Script>
      <Script src="/js/onpage-menu.js" id="onPageMenu"></Script>
      <Script src="/js/main.js" id="main"></Script>
    </>
  );
};
