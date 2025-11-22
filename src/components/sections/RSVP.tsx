"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from 'next-intl';

export function RSVP() {
  const t = useTranslations('RSVP');
  const [attending, setAttending] = useState<string>("yes");
  
  // Guest 1
  const [dietary, setDietary] = useState<string>("no");
  const [foodPrefs, setFoodPrefs] = useState<string[]>([]);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [otherAllergen, setOtherAllergen] = useState("");

  // Plus One
  const [plusOne, setPlusOne] = useState<string>("no");
  const [guestDietary, setGuestDietary] = useState<string>("no");
  const [guestFoodPrefs, setGuestFoodPrefs] = useState<string[]>([]);
  const [guestAllergens, setGuestAllergens] = useState<string[]>([]);
  const [guestOtherAllergen, setGuestOtherAllergen] = useState("");

  // Accommodation
  const [accommodation, setAccommodation] = useState<string>("no");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here
    console.log("Form Submitted", { attending, dietary, foodPrefs, allergens, otherAllergen, plusOne, accommodation });
    setSubmitted(true);
  };

  const handleCheckboxChange = (
    value: string,
    state: string[],
    setState: (val: string[]) => void
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  if (submitted) {
    return (
      <section id="RSVP" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
         {/* Background Image */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
            style={{
            backgroundImage: "url('/images/rsvp/background.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="glass-card max-w-2xl mx-auto p-12">
                <h2 className="text-3xl font-serif font-bold text-brand mb-4">{t('successTitle')}</h2>
                <p className="text-lg text-gray-900">{t('successMessage')}</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="RSVP" className="relative py-20 min-h-screen overflow-hidden">
       {/* Background Image */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/rsvp/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-4xl font-bold text-white drop-shadow-lg">{t('title')}</h2>
        </div>

        <Card className="glass-card max-w-3xl mx-auto border-none">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-serif text-gray-900">
              {t('subtitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Attending */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-gray-900">
                  {t('attendingLabel')}
                </Label>
                <RadioGroup
                  defaultValue="yes"
                  onValueChange={setAttending}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="attending-yes" />
                    <Label htmlFor="attending-yes" className="text-gray-900">{t('yes')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="attending-no" />
                    <Label htmlFor="attending-no" className="text-gray-900">{t('no')}</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Guest 1 Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-xl border-b border-gray-300 pb-2 text-gray-900">
                  {t('yourDetails')}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">{t('fullName')}</Label>
                    <Input id="name" required placeholder={t('fullName')} className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">{t('email')}</Label>
                    <Input id="email" type="email" required placeholder={t('email')} className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">{t('phone')}</Label>
                    <Input id="phone" type="tel" required placeholder={t('phone')} className="bg-white/50" />
                  </div>
                </div>
              </div>

              {attending === "yes" && (
                <>
                  {/* Dietary Requirements */}
                  <div className="space-y-4 p-4 bg-white/40 rounded-lg">
                    <Label className="text-lg font-semibold text-gray-900">
                      {t('dietaryLabel')}
                    </Label>
                    <RadioGroup
                      defaultValue="no"
                      onValueChange={setDietary}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="dietary-yes" />
                        <Label htmlFor="dietary-yes" className="text-gray-900">{t('yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="dietary-no" />
                        <Label htmlFor="dietary-no" className="text-gray-900">{t('no')}</Label>
                      </div>
                    </RadioGroup>

                    {dietary === "yes" && (
                      <div className="space-y-6 mt-4 pl-4 border-l-2 border-brand">
                        <div className="space-y-3">
                          <Label className="font-semibold text-gray-900">{t('preferenceLabel')}</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {["Gluten Free", "Vegan", "Vegetarian", "Pescatarian"].map((pref) => (
                              <div key={pref} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`pref-${pref}`} 
                                  checked={foodPrefs.includes(pref)}
                                  onCheckedChange={() => handleCheckboxChange(pref, foodPrefs, setFoodPrefs)}
                                />
                                <Label htmlFor={`pref-${pref}`} className="text-gray-900">{pref}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="font-semibold text-gray-900">{t('allergensLabel')}</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {["Dairy", "Nuts", "Eggs", "Soya", "Shellfish", "Wheat", "Other"].map((allergen) => (
                              <div key={allergen} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`allergen-${allergen}`} 
                                  checked={allergens.includes(allergen)}
                                  onCheckedChange={() => handleCheckboxChange(allergen, allergens, setAllergens)}
                                />
                                <Label htmlFor={`allergen-${allergen}`} className="text-gray-900">{allergen}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        {allergens.includes("Other") && (
                            <div className="space-y-2">
                                <Label htmlFor="other-allergen" className="text-gray-900">{t('otherAllergenLabel')}</Label>
                                <Input 
                                    id="other-allergen" 
                                    value={otherAllergen} 
                                    onChange={(e) => setOtherAllergen(e.target.value)}
                                    placeholder={t('otherAllergenLabel')}
                                    className="bg-white/50"
                                />
                            </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Plus One */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-900">
                      {t('plusOneLabel')}
                    </Label>
                    <RadioGroup
                      defaultValue="no"
                      onValueChange={setPlusOne}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="plusone-yes" />
                        <Label htmlFor="plusone-yes" className="text-gray-900">{t('yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="plusone-no" />
                        <Label htmlFor="plusone-no" className="text-gray-900">{t('no')}</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {plusOne === "yes" && (
                     <div className="space-y-6 border border-white/20 p-6 rounded-lg bg-white/40">
                        <h3 className="font-semibold text-xl border-b border-gray-300 pb-2 text-gray-900">
                            {t('guestDetails')}
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="guest-name" className="text-gray-900">{t('fullName')}</Label>
                                <Input id="guest-name" placeholder={t('fullName')} className="bg-white/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="guest-email" className="text-gray-900">{t('email')}</Label>
                                <Input id="guest-email" type="email" placeholder={t('email')} className="bg-white/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="guest-phone" className="text-gray-900">{t('phone')}</Label>
                                <Input id="guest-phone" type="tel" placeholder={t('phone')} className="bg-white/50" />
                            </div>
                        </div>

                         {/* Guest Dietary */}
                         <div className="space-y-4">
                            <Label className="text-lg font-semibold text-gray-900">
                            {t('guestDietaryLabel')}
                            </Label>
                            <RadioGroup
                            defaultValue="no"
                            onValueChange={setGuestDietary}
                            className="flex space-x-4"
                            >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="guest-dietary-yes" />
                                <Label htmlFor="guest-dietary-yes" className="text-gray-900">{t('yes')}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="guest-dietary-no" />
                                <Label htmlFor="guest-dietary-no" className="text-gray-900">{t('no')}</Label>
                            </div>
                            </RadioGroup>

                            {guestDietary === "yes" && (
                            <div className="space-y-6 mt-4 pl-4 border-l-2 border-brand">
                                <div className="space-y-3">
                                <Label className="font-semibold text-gray-900">{t('preferenceLabel')}</Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {["Gluten Free", "Vegan", "Vegetarian", "Pescatarian"].map((pref) => (
                                    <div key={pref} className="flex items-center space-x-2">
                                        <Checkbox 
                                        id={`guest-pref-${pref}`} 
                                        checked={guestFoodPrefs.includes(pref)}
                                        onCheckedChange={() => handleCheckboxChange(pref, guestFoodPrefs, setGuestFoodPrefs)}
                                        />
                                        <Label htmlFor={`guest-pref-${pref}`} className="text-gray-900">{pref}</Label>
                                    </div>
                                    ))}
                                </div>
                                </div>

                                <div className="space-y-3">
                                <Label className="font-semibold text-gray-900">{t('allergensLabel')}</Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {["Dairy", "Nuts", "Eggs", "Soya", "Shellfish", "Wheat", "Other"].map((allergen) => (
                                    <div key={allergen} className="flex items-center space-x-2">
                                        <Checkbox 
                                        id={`guest-allergen-${allergen}`} 
                                        checked={guestAllergens.includes(allergen)}
                                        onCheckedChange={() => handleCheckboxChange(allergen, guestAllergens, setGuestAllergens)}
                                        />
                                        <Label htmlFor={`guest-allergen-${allergen}`} className="text-gray-900">{allergen}</Label>
                                    </div>
                                    ))}
                                </div>
                                </div>
                                {guestAllergens.includes("Other") && (
                                    <div className="space-y-2">
                                        <Label htmlFor="guest-other-allergen" className="text-gray-900">{t('otherAllergenLabel')}</Label>
                                        <Input 
                                            id="guest-other-allergen" 
                                            value={guestOtherAllergen} 
                                            onChange={(e) => setGuestOtherAllergen(e.target.value)}
                                            placeholder={t('otherAllergenLabel')}
                                            className="bg-white/50"
                                        />
                                    </div>
                                )}
                            </div>
                            )}
                        </div>
                     </div>
                  )}

                  {/* Accommodation */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-900">
                      {t('accommodationLabel')}
                    </Label>
                    <RadioGroup
                      defaultValue="no"
                      onValueChange={setAccommodation}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="room-yes" />
                        <Label htmlFor="room-yes" className="text-gray-900">{t('yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="room-no" />
                        <Label htmlFor="room-no" className="text-gray-900">{t('no')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              <Button type="submit" size="lg" className="w-full bg-brand hover:bg-brand/90 text-white font-bold py-6 text-xl">
                {t('submitButton')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
