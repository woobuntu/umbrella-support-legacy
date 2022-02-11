import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function SupportMethods() {
  return (
    <Card sx={{ mb: 2 }} variant="outlined">
      <CardHeader title="후원 방법" />
      <CardContent>
        <Accordion expanded={true} disabled>
          <AccordionSummary>
            <Typography>온라인입금</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              후원계좌에 온라인 입금(계좌이체, 무통장입금)을 통해 후원
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={true} disabled>
          <AccordionSummary>
            <Typography>자동이체</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              후원자님의 거래은행에 매달 지정한 날짜에 자동이체 신청
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={true} disabled>
          <AccordionSummary>
            <Typography>CMS자동이체</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              금융결제원에 출금을 의뢰하는 방법으로 CMS신청서를 작성하셔서
              이메일 또는 우편으로 보내주시면 직접 은행에 나가는 불편없이
              후원하실 수 있습니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
