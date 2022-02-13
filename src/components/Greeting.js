import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Greeting() {
  return (
    <Card sx={{ mb: 2 }} variant="outlined">
      <CardContent>
        <Typography sx={{ mb: 1.5 }}>
          &nbsp;사단법인 함께쓰는우산은, 지적장애인 등이 지역사회의 한
          구성원으로서 비장애인들과 자연스럽게 어울려 살며 자신의 역할과 책임을
          다하면서 살아가길 희망합니다.
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          &nbsp;생각의 힘이 다소 부족하더라도 어깨를 나란히 하고 함께 걸어가 줄
          친구가 있다면 함께 생활하기에 많이 힘들거나 외롭지 않을 것입니다.
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          &nbsp;이들 친구들이 우리 지역사회에서 함께 살아갈 꿈과 희망을
          이루어가는데 있어 여러분의 정성어린 관심과 애정은 큰 도움이 될
          것입니다.
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText
              primary="소득공제영수증"
              secondary="후원금은 법인세법 24조 및 소득세법 34조에 의해
          연말정산시 소득공제를 받으실 수 있습니다.(기부금영수증 발급)"
            />
          </ListItem>
        </List>
        <List
          subheader={
            <ListSubheader component="div">법인 후원계좌</ListSubheader>
          }
        >
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="예금주" secondary="사단법인 함께쓰는우산" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="농협" secondary="355-0045-2976-33" />
          </ListItem>
        </List>
        <List
          subheader={
            <ListSubheader component="div">보호작업장 후원계좌</ListSubheader>
          }
        >
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary="예금주"
              secondary="함께쓰는우산장애인보호작업장"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="농협" secondary="301-0298-2530-21" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
