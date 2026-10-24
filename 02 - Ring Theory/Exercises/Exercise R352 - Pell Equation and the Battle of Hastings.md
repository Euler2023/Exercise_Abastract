---
title: "Exercise R352: Pell Equation and the Battle of Hastings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Exercise 3, printed p. 44, PDF p. 63"
created: 2026-10-20
---

# Exercise R352: Pell Equation and the Battle of Hastings

## Problem Statement

> [!question] Neukirch I.7.3 — The Battle of Hastings (October 14, 1066)
> “The men of Harold stood well together, as their wont was, and formed thirteen squares, with a like number of men in every square thereof, and woe to the hardy Norman who ventured to enter their redoubts; for a single blow of a Saxon war-hatched would break his lance and cut through his coat of mail... When Harold threw himself into the fray the Saxons were one mighty square of men, shouting the battle-cries, ‘Ut!’, ‘Olicrosse!’, ‘Godemite!’.” [Fictitious historical text, following essentially problem no. 129 in: H.E. Dundeney, *Amusements in Mathematics*, 1917 (Dover reprints 1958 and 1970).]
>
> **Question.** How many troops does this suggest Harold II had at the battle of Hastings?

> [!warning] Source ambiguity: no minimality condition is printed
> Interpreting the first formation as thirteen equal square arrays and Harold as the additional person in the final array gives a Pell equation with infinitely many positive solutions. The smallest suggested troop count is $421200$, excluding Harold, or $421201$ including him. This is the minimum mathematical solution of the fictional puzzle, not a uniquely determined historical army size. The proof below describes all positive solutions.

## Hints

> [!hint]- Hint 1: Translate the two formations
> If each original square has $x$ men along one side and the final square has side $y$, the equation is $13x^2+1=y^2$. The original troop count is $13x^2$, with Harold added afterward.

> [!hint]- Hint 2: Work first in the full integer ring
> In $\mathbb Q(\sqrt{13})$, put $\eta=(3+\sqrt{13})/2$. It is a norm-$-1$ unit. Show that no unit lies strictly between $1$ and $\eta$; hence all units are $\pm\eta^k$. But the Pell equation requires integer coefficients, not just half-integer coefficients.

> [!hint]- Hint 3: Impose the order and norm restrictions
> The full integer ring is $\mathbb Z[\eta]$, whereas $\mathbb Z[\sqrt{13}]=\mathbb Z+2\mathbb Z\eta$. Modulo $2$, $\eta$ satisfies $T^2+T+1$, so its residue has order $3$. Combine this with $N(\eta)=-1$ to see that the positive norm-one units in the smaller order are powers of $\eta^6$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of all positive Pell solutions
>
> **1. Model the formations.** Let $x\ge1$ be the side length of each of the thirteen original square formations, and $y\ge1$ the side length after Harold joins. Then
> $$
> 13x^2+1=y^2,
> \qquad y^2-13x^2=1.
> $$
> The integer $y+x\sqrt{13}>1$ is therefore a norm-one unit in $\mathbb Z[\sqrt{13}]$.
>
> **2. Find all units in the full integer ring.** The quadratic integral-basis formula gives
> $$
> \mathcal O_K=\mathbb Z\left[\frac{1+\sqrt{13}}2\right]
> =\mathbb Z[\eta],\qquad
> \eta=\frac{3+\sqrt{13}}2.
> $$
> It satisfies $\eta^2-3\eta-1=0$, so $N(\eta)=-1$ and $\eta^{-1}=(\sqrt{13}-3)/2$. In particular,
> $$
> \eta+\eta^{-1}=\sqrt{13}.
> $$
> Suppose a unit $u=(a+b\sqrt{13})/2$ satisfies $1<u<\eta$. Its conjugate is $\overline u=\pm u^{-1}$, so
> $$
> 0<b=\frac{u-\overline u}{\sqrt{13}}
> \le\frac{u+u^{-1}}{\sqrt{13}}<1.
> $$
> The final strict inequality follows because $t+t^{-1}$ is strictly increasing for $t>1$ and equals $\sqrt{13}$ at $t=\eta$. But $b$ is an integer, a contradiction. Thus $\eta$ is the least unit greater than $1$. Dividing positive units by suitable powers of $\eta$, as in the least-unit argument of [[02 - Ring Theory/Exercises/Exercise R350 - Fundamental Units from Pell Equations|R350]], proves
> $$
> \mathcal O_K^\times=\{\pm\eta^k:k\in\mathbb Z\}.
> $$
> This conclusion here uses the displayed unit and its direct minimality proof; no existence theorem for Pell solutions is being assumed.
>
> **3. Select units with integer coefficients.** Since $\sqrt{13}=2\eta-3$,
> $$
> \mathbb Z[\sqrt{13}]=\mathbb Z+2\mathbb Z\eta.
> $$
> Reduction in the integer basis $1,\eta$ gives
> $$
> \mathcal O_K/2\mathcal O_K
> \cong\mathbb F_2[T]/(T^2+T+1).
> $$
> The polynomial has no root in $\mathbb F_2$, so this is the field with four elements. Its element $\overline\eta$ is not $1$ and satisfies $\overline\eta^3=1$, hence has order $3$. An element of $\mathcal O_K$ belongs to $\mathbb Z+2\mathbb Z\eta$ precisely when its residue is a constant in $\mathbb F_2$. For a unit that constant must be $1$. Consequently
> $$
> \eta^k\in\mathbb Z[\sqrt{13}]
> \quad\Longleftrightarrow\quad 3\mid k.
> $$
> Norm one additionally requires $k$ even. Thus the positive units greater than $1$ with norm one in $\mathbb Z[\sqrt{13}]$ are exactly
> $$
> \eta^{6j},\qquad j=1,2,3,\ldots.
> $$
> Direct multiplication gives
> $$
> \eta^3=18+5\sqrt{13},\qquad
> E:=\eta^6=649+180\sqrt{13}.
> $$
>
> **4. State all troop counts and their minimum.** Define the integers $y_j,x_j$ by
> $$
> y_j+x_j\sqrt{13}=E^j\qquad(j\ge1).
> $$
> Since $E^{-1}=649-180\sqrt{13}$, they can also be written
> $$
> y_j=\frac{E^j+E^{-j}}2,\qquad
> x_j=\frac{E^j-E^{-j}}{2\sqrt{13}}.
> $$
> Their coefficients are positive integers: this follows by induction when multiplying by $649+180\sqrt{13}$, or from the recurrences
> $$
> y_{j+1}=649y_j+2340x_j,\qquad
> x_{j+1}=180y_j+649x_j,
> $$
> with $(y_1,x_1)=(649,180)$. Their norm is one. Conversely, every positive integer solution of the Pell equation gives such a unit and was classified in Step 3. Thus all possible original troop counts are
> $$
> N_j=13x_j^2=y_j^2-1\qquad(j\ge1).
> $$
> The formula for $x_j$ is strictly increasing with $j$, since $E>1$. The least count is therefore
> $$
> N_1=13\cdot180^2=421200,
> \qquad N_1+1=649^2=421201.
> $$
> There are infinitely many larger counts $N_j$. For completeness, all integer solutions of $y^2-13x^2=1$ are $(y,x)=(\pm y_j,\pm x_j)$ for $j\ge1$, with independent signs, together with $(\pm1,0)$. The positive-formation interpretation excludes the latter trivial solutions.

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Source status:** The entire fictional passage, question, and date were checked at [S4, Ch. I, §7, Exercise 3, printed p. 44, PDF p. 63]. The source has no printed hint. The mathematical model and the complete Pell classification above are independent derivations. No source figure is needed.
- **Source ambiguity:** The printed question does not request the least positive answer. The warning distinguishes its infinite solution family, its least member, and the count with or without Harold. The source explicitly calls the historical passage fictitious; the computed number is not historical evidence.
- **Proof inputs and boundaries:** The full quadratic integer-ring formula is imported from R333. The proof supplies the least-unit check, the power-generation argument via R350, the modulo-$2$ order calculation, and the integer-coefficient restriction. It does not confuse $\mathcal O_K$ with $\mathbb Z[\sqrt{13}]$, invoke a continued-fraction table, or merely assume that the first found Pell solution is fundamental.
- **Computational check:** Exact integer arithmetic independently recomputed $(18+5\sqrt{13})^2=649+180\sqrt{13}$, $649^2-13\cdot180^2=1$, $13\cdot180^2=421200$, and $649^2=421201$. The complete classification rests on the proof, not on this finite check.
- **Routing:** Ring Theory is primary because units in two quadratic orders, their norms, and a finite quotient determine the solution set.
