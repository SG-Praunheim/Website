import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';
import Modal from '@mui/material/Modal';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="#">
        SG Praunheim
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Footer() {

  const [openDatenschutz, setOpenDatenschutz] = React.useState(false);
  const handleOpenDatenschutz = () => setOpenDatenschutz(true);
  const handleCloseDatenschutz = () => setOpenDatenschutz(false);

  const [openImpressum, setOpenImpressum] = React.useState(false);
  const handleOpenImpressum = () => setOpenImpressum(true);
  const handleCloseImpressum = () => setOpenImpressum(false);

  return (
    <React.Fragment>
      <Divider id="footerContent" />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 1, sm: 2 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 2, sm: 4 },
            width: '100%',
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="#" onClick={handleOpenDatenschutz}>
              Datenschutz
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#" onClick={handleOpenImpressum}>
              Impressum
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://www.instagram.com/sg_praunheim?igsh=MTEzb2xhdzVjaGRwdQ=="
              aria-label="Instagram"
              sx={{ alignSelf: 'center' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="#"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="#"
              aria-label="Facebook"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
      <Modal
                open={openDatenschutz}
                onClose={handleCloseDatenschutz}
                aria-labelledby="modal-datenschutz"
                aria-describedby="modal-modal-description"
                disableScrollLock
                sx={{ overflow: 'scroll' }}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Datenschutz
                    </Typography>
                    <Typography  sx={{ mt: 2 }}>
                        {datenschutz}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Cookies
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {cookies}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Kontaktformular
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {contact}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Auskunft, Löschung, Sperrung
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {auskunft}
                    </Typography>
                    <Typography variant="h6" component="h2">
                    Widerspruch Werbe-Mails
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {widerspruch}
                    </Typography>
                </Box>
            </Modal>

            <Modal
                open={openImpressum}
                disableScrollLock
                onClose={handleCloseImpressum}
                aria-labelledby="modal-impressum"
                aria-describedby="modal-impressum-description"
                sx={{ overflow: 'scroll' }}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                    Angaben gemäß § 5 TMG:
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Niklas Deeg
                    </Typography>
                    <Typography>SG Praunheim</Typography>
                    <Typography>Alt Praunheim 44</Typography>
                    <Typography>60488 Frankfurt am Main</Typography>

                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                    Kontakt:
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Telefon: +49 69 76 37  79
                    </Typography>
                    <Typography>E-Mail:  sgpraunheim.kegeln@outlook.de</Typography>

                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Niklas Deeg
                    </Typography>
                    <Typography>SG Praunheim</Typography>
                    <Typography>Alt Praunheim 44</Typography>
                    <Typography>60488 Frankfurt am Main</Typography>

                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                    Haftungsausschluss (Disclaimer)
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Haftung für Inhalte
                    </Typography>
                    <Typography>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</Typography>
                    <Typography sx={{ mt: 2 }}>
                    Haftung für Links
                    </Typography>
                    <Typography>
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </Typography>

                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                    Urheberrecht
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </Typography>

                </Box>
            </Modal>
    </React.Fragment>
  );
};

const datenschutz = "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.";

const cookies = "Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns. Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.";

const contact = "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.";

const auskunft = "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.";

const widerspruch = "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.";

