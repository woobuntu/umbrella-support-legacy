import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function ContactUs() {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardHeader title="Contact Us" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="이메일" secondary="withus1030@naver.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText
              primary="주소"
              secondary="(우)16039 경기도 의왕시 갈미2로 30 (내손동 750) 미광프라자 401호"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="전화" secondary="031-342-1030" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
