#include <Adafruit_NeoPixel.h>

#define NUM_PIXELS 4
#define PIXEL_PIN_A1 5
#define PIXEL_PIN_A2 6
#define PIXEL_PIN_A3 7

Adafruit_NeoPixel pixels_A1(NUM_PIXELS, PIXEL_PIN_A1, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel pixels_A2(NUM_PIXELS, PIXEL_PIN_A2, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel pixels_A3(NUM_PIXELS, PIXEL_PIN_A3, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels_A1.begin();
  pixels_A2.begin();
  pixels_A3.begin();
}

void loop() {
  int analog_val_A1 = analogRead(A1);
  int analog_val_A2 = analogRead(A2);
  int analog_val_A3 = analogRead(A3);

  // Define a cor dos LEDs da faixa Neopixel
  uint32_t color_A1 = pixels_A1.Color(255, 0, 0);
  uint32_t color_A2 = pixels_A2.Color(0, 255, 0);
  uint32_t color_A3 = pixels_A3.Color(0, 0, 255);

  // Mapeia a posição do LED aceso na faixa Neopixel com base na tensão de entrada na porta analógica correspondente
  int led_index_A1 = map(analog_val_A1, 0, 1023, 0, NUM_PIXELS - 1);
  int led_index_A2 = map(analog_val_A2, 0, 1023, 0, NUM_PIXELS - 1);
  int led_index_A3 = map(analog_val_A3, 0, 1023, 0, NUM_PIXELS - 1);

  // Liga ou desliga os LEDs da faixa Neopixel com base na posição mapeada
  for (int i = 0; i < NUM_PIXELS; i++) {
    if (i == led_index_A1) {
      pixels_A1.setPixelColor(i, color_A1);
    } else {
      pixels_A1.setPixelColor(i, 0);
    }

    if (i == led_index_A2) {
      pixels_A2.setPixelColor(i, color_A2);
    } else {
      pixels_A2.setPixelColor(i, 0);
    }

    if (i == led_index_A3) {
      pixels_A3.setPixelColor(i, color_A3);
    } else {
      pixels_A3.setPixelColor(i, 0);
    }
  }

  pixels_A1.show();
  pixels_A2.show();
  pixels_A3.show();
}

