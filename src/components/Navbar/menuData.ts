
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import AbcIcon from '@mui/icons-material/Abc';
import TranslateIcon from '@mui/icons-material/Translate';


export const menu = [
  {
    icon: QuizIcon,
    label: `Quiz`,
    path: `/quiz`,
    subs: []
  },
  {
    icon: SchoolIcon,
    label: `Lista de Kanji`,
    path: `/lista`,
    subs: []
  },
  {
    icon: AbcIcon,
    label: `Romaji -> Kanji`,
    path: `/romaji`,
    subs: []
  },
  {
    icon: TranslateIcon,
    adminOnly: true,
    label: `Kanji -> Romaji`,
    path: `/kanji`,
    subs: []
  }
];
