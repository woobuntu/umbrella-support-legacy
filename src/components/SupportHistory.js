import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function SupportHistory() {
  return (
    <Card variant="outlined">
      <CardHeader title="후원금 모금액 및 사용실적" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="2020년 연간기부금모금액 활용실적명세서" />
            <Button
              variant="contained"
              onClick={() => {
                window.open(
                  "https://woobuntu-umbrella.s3.ap-northeast-2.amazonaws.com/support/2020.pdf"
                );
              }}
            >
              다운로드
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="2021년 연간기부금모금액 활용실적명세서" />
            <Button
              variant="contained"
              onClick={() => {
                window.open(
                  "https://woobuntu-umbrella.s3.ap-northeast-2.amazonaws.com/support/2021.pdf"
                );
              }}
            >
              다운로드
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
