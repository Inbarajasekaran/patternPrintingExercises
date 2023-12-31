public class Pattern {
    public static String star = "*";
    public static String space = " ";

    public static class ClearTerminal {
        void clearTerminal() {
            System.out.println("\033[H\033[2J");
        }
    }

    public static class Vertical {
        public void vertical() {
            for (int i = 0; i < 5; i++) {
                System.out.println(star);
            }
        }
    }

    public static class Horizontal {
        public void horizontal() {
            String storeStar = "";
            for (int i = 1; i < 5; i++) {
                storeStar += star;
            }
            System.out.println(storeStar);
        }
    }

    public static class RTriangle {
        public void rTriangle() {
            String storeStar = "";
            for (int i = 1; i < 5; i++) {
                storeStar += star;
                System.out.println(storeStar);
            }
        }
    }

    public static class LTriangle {
        public void lTriangle() {
            String storeStar = "";
            for (int i = 0; i < 5; i++) {
                storeStar += star;

            }
            storeStar = storeStar.substring(0, storeStar.length() - 1);
            System.out.println(storeStar);
        }
    }

    public static void main(String[] args) {
        ClearTerminal cls = new ClearTerminal();
        cls.clearTerminal();

        // Vertical vertical = new Vertical();
        // vertical.vertical();

        // Horizontal horizontal = new Horizontal();
        // horizontal.horizontal();

        // RTriangle rightTriangle = new RTriangle();
        // rightTriangle.rTriangle();

        LTriangle leftTriangle = new LTriangle();
        leftTriangle.lTriangle();
    }
}
