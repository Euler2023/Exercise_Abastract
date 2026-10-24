---
title: "Exercise Gal148: Quadratic Subfields of Two Power Cyclotomic Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §10, Exercise 5, printed p. 65, PDF p. 84"
created: 2026-10-20
---

# Exercise Gal148: Quadratic Subfields of Two Power Cyclotomic Fields

## Problem Statement

> [!question] Neukirch I.10.5
> Show that $\mathbb Q(\sqrt{-1})$, $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt{-2})$ are the quadratic subfields of $\mathbb Q(\zeta_n)/\mathbb Q$ for $n=2^q$, $q\ge3$.

## Hints

> [!hint]- Hint 1: Construct the three fields in the eighth-root field
> Use $i=\zeta_8^2$, $\sqrt2=\zeta_8+\zeta_8^{-1}$, and a square root of $-2$ given by $\zeta_8-\zeta_8^{-1}$. Since $8\mid2^q$, these elements lie in the required field.

> [!hint]- Hint 2: Describe the unit group modulo a power of two
> Prove that $5$ generates the subgroup of units congruent to $1$ modulo $4$, of order $2^{q-2}$. Show $v_2(5^{2^k}-1)=k+2$ by induction.

> [!hint]- Hint 3: Exclude further quadratic subfields
> The group $(\mathbb Z/2^q\mathbb Z)^\times$ is $\langle-1\rangle\times\langle5\rangle$. It has exactly three nontrivial sign characters. Apply Galois correspondence and distinguish the three visible fields.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $E=\mathbb Q(\zeta_{2^q})$, where $q\ge3$, and put $\zeta_8=\zeta_{2^q}^{2^{q-3}}$. The elements
> $$
> i=\zeta_8^2,\qquad u=\zeta_8+\zeta_8^{-1},\qquad v=\zeta_8-\zeta_8^{-1}
> $$
> have squares $-1$, $2$, and $-2$, respectively. For example, $\zeta_8^2+\zeta_8^{-2}=0$, so $u^2=2$ and $v^2=-2$. Each radicand is nonsquare in $\mathbb Q$, so all three generated fields are quadratic subfields of $E$. They are distinct: $\mathbb Q(\sqrt2)$ is real, while the other two are not; equality of the two imaginary fields would make $(-2)/(-1)=2$ a rational square, by the square-class criterion proved in Exercise I.10.4.
>
> To prove that no others exist, we calculate the sign characters of
> $$
> G=\operatorname{Gal}(E/\mathbb Q)\cong(\mathbb Z/2^q\mathbb Z)^\times.
> $$
> For $k\ge0$,
> $$
> v_2(5^{2^k}-1)=k+2.
> $$
> The case $k=0$ follows from $5-1=4$. If $a=5^{2^k}$, then $a\equiv1\pmod4$, so $v_2(a+1)=1$; factoring $a^2-1=(a-1)(a+1)$ proves the next case. It follows that $5$ has order exactly $2^{q-2}$ modulo $2^q$: its $2^{q-2}$th power is $1$ and its $2^{q-3}$th power is not. Its cyclic subgroup lies in the units congruent to $1\pmod4$, a set of exactly $2^{q-2}$ residue classes, so it equals that set.
>
> Every odd residue is congruent to $1$ or $3\pmod4$. Multiplying one of the second type by $-1$ puts it in the first type. Since $-1\equiv3\pmod4$, the intersection of $\langle-1\rangle$ and $\langle5\rangle$ is trivial. Consequently
> $$
> G\cong C_2\times C_{2^{q-2}}.
> $$
> Each of the two cyclic generators may independently map to $1$ or $-1$, giving four characters $G\to\{\pm1\}$. Exactly three are nontrivial. By finite Galois correspondence, there are precisely three quadratic subfields, one for the kernel of each nontrivial character. The three distinct fields already exhibited therefore exhaust them.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §10, Exercise 5, printed p. 65, PDF p. 84]. No source figure is required. The solution is an independent derivation.
- **Inputs and proof scope:** The cyclotomic Galois theorem and finite Galois correspondence are imported. The unit-group decomposition modulo $2^q$ and the count of quadratic fixing subgroups are proved here; no assumption that the whole Galois group is cyclic is made.
- **Endpoint check:** At $q=3$ the group is $C_2\times C_2$, so the proof already gives three quadratic subfields in $\mathbb Q(\zeta_8)$. For $q=1,2$ the conclusion is different, which is why the printed hypothesis $q\ge3$ matters.
- **Routing:** Explicit generators establish existence; subgroup counting establishes completeness. Galois Theory is primary.
