import ModeSelect from "~/components/ModeSelect";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Profiles from "./Menus/Profiles";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustoms.navBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.default",
        paddingX: "16px",
        gap: "16px",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            fontSize="small"
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex", gap: "8px" } }}>
          <Workspaces></Workspaces>
          <Recent></Recent>
          <Starred></Starred>
          <Templates></Templates>
          <Button variant="outlined" startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ minWidth: "120px" }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;