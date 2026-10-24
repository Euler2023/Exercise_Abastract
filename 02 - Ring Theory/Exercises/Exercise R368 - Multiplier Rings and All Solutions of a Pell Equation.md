---
title: "Exercise R368: Multiplier Rings and All Solutions of a Pell Equation"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §12, Exercise 4, printed p. 84, PDF p. 103"
created: 2026-10-20
---

# Exercise R368: Multiplier Rings and All Solutions of a Pell Equation

## Problem Statement

> [!question] Neukirch I.12.4
> Determine the ring of multipliers $\mathfrak o$ of the complete module $M=\mathbb Z+\mathbb Z\sqrt2$ in $\mathbb Q(\sqrt2)$. Show that $\varepsilon=1+\sqrt2$ is a fundamental unit of $\mathfrak o$. Determine all integer solutions of "Pell's equation"
> $$
> x^2-2y^2=7.
> $$
> **Printed hint:** $N(x+y\sqrt2)=x^2-2y^2$, $N(3+\sqrt2)=N(5+3\sqrt2)=7$.

## Hints

> [!hint]- Hint 1: Use the element one in the module
> The module is already a ring containing $1$, so a multiplier lies in $M$ and every element of $M$ multiplies it into itself.

> [!hint]- Hint 2: Prove the smallest unit statement
> Any unit has norm $\pm1$. Exclude a positive unit strictly between $1$ and $1+\sqrt2$ by bounding its coefficient of $\sqrt2$.

> [!hint]- Hint 3: Reduce norm seven to a bounded interval
> Let $\eta=(1+\sqrt2)^2=3+2\sqrt2$, of norm $1$. Up to sign and a power of $\eta$, arrange $\sqrt7\le x+y\sqrt2<\eta\sqrt7$. Then $0\le y<2\sqrt7<6$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> ### 1. The multiplier ring
> The group $M=\mathbb Z[\sqrt2]$ is a ring containing $1$. If $\alpha M\subseteq M$, then $\alpha=\alpha\cdot1\in M$; conversely any element of this ring preserves it. Thus $\mathfrak o=\mathbb Z[\sqrt2]$.
>
> ### 2. Its entire unit group
> For $u=x+y\sqrt2$ with integers $x,y$, the conjugate is $u'=x-y\sqrt2$ and $N(u)=uu'=x^2-2y^2$. The element is a unit exactly when $N(u)=\pm1$: necessity follows by multiplicativity and integral norms; sufficiency follows from $u^{-1}=u'/N(u)\in\mathfrak o$. The element $\varepsilon=1+\sqrt2$ has norm $-1$ and inverse $\sqrt2-1$.
>
> Suppose a unit satisfies $1<u<\varepsilon$ in the chosen real embedding. Then $|u'|=1/u<1$, and
> $$
> 0<y=\frac{u-u'}{2\sqrt2}<\frac{\varepsilon+1}{2\sqrt2}<2.
> $$
> Thus $y=1$, and the norm equation gives $x^2-2=\pm1$, forcing $x=\pm1$. The resulting positive values are $\sqrt2-1<1$ and $1+\sqrt2=\varepsilon$, neither in the interval. Hence no such unit exists. For an arbitrary unit, change its sign to make it positive and multiply by an appropriate integer power of $\varepsilon$ to place it in $[1,\varepsilon)$. It must then equal $1$. Therefore
> $$
> \mathfrak o^\times=\{\pm\varepsilon^k:k\in\mathbb Z\},
> $$
> which proves that $\varepsilon$ is fundamental. Norm-one units have even $k$, and are $\pm\eta^k$ with $\eta=\varepsilon^2=3+2\sqrt2$.
>
> ### 3. Reduce and enumerate all norm-seven elements
> Let $\alpha=x+y\sqrt2$ satisfy $N(\alpha)=7$. Its two real embeddings have the same sign. Choose an overall sign making $\alpha>0$; then $\alpha'=7/\alpha>0$. Since $\eta>1$, there is an integer power of $\eta$ taking it to an element $\beta$ in the half-open interval
> $$
> \sqrt7\le\beta<\eta\sqrt7.
> $$
> Multiplication by $\eta$ or $\eta^{-1}=3-2\sqrt2$ preserves the integer coefficients and the norm. Write $\beta=X+Y\sqrt2$. Since $\beta'=7/\beta$,
> $$
> Y=\frac{\beta-7/\beta}{2\sqrt2}\ge0.
> $$
> The function $b-7/b$ is strictly increasing for $b>0$ (its difference at $b_2>b_1$ equals $(b_2-b_1)(1+7/(b_1b_2))>0$). Using $\eta^{-1}=3-2\sqrt2$ gives
> $$
> Y<\frac{\sqrt7(\eta-\eta^{-1})}{2\sqrt2}=2\sqrt7<6.
> $$
> Thus $Y$ is one of $0,1,2,3,4,5$, and $X>0$. The possible squares $X^2=7+2Y^2$ are respectively
> $$
> 7,\ 9,\ 15,\ 25,\ 39,\ 57.
> $$
> Only $9$ and $25$ are squares. Both resulting positive elements $3+\sqrt2$ and $5+3\sqrt2$ lie in the reduction interval: each is greater than $\sqrt7$ and less than $\eta\sqrt7$ (for the latter bound it suffices that both are less than $10$ while $\eta\sqrt7>5\cdot2=10$). Hence every original solution has exactly one of the forms
> $$
> \boxed{\displaystyle
> x+y\sqrt2=\pm(3+\sqrt2)(3+2\sqrt2)^k
> \quad\text{or}\quad
> \pm(5+3\sqrt2)(3+2\sqrt2)^k,\qquad k\in\mathbb Z.}
> $$
> Conversely both families have integer coefficients and norm $7$, because their initial norms are $7$ and $N(\eta)=1$. Negative $k$ are valid since $\eta^{-1}\in\mathfrak o$. The two reduced representatives are distinct and the half-open interval selects one representative per positive orbit, so the two families account for all solutions without losing the negative signs of $x$ or $y$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Orders and Conductors|Multiplier Rings]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Fundamental Units and Pell Equations]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Fields and Norms]]

## Notes

- **Computational check:** Exact integer enumeration for every $y$ with $-10000\le y\le10000$ found $40$ solutions of $x^2-2y^2=7$, including both signs of $x$. They agree exactly with the two displayed unit orbits in this range. The reduction argument above, rather than this bounded check, proves completeness for all integers.

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §12, Exercise 4, printed p. 84, PDF p. 103]. No source figure is required.
- **Proof status:** The multiplier ring, full unit group, bounded norm-seven reduction, and both infinite solution families are independently derived. The finite list of six candidate squares is shown explicitly; it is a proof of exhaustion, not an unbounded numerical search.
- **Checks:** The printed two initial solutions have norms $9-2=7$ and $25-18=7$. Multiplication by $3+2\sqrt2$ sends $(x,y)$ to $(3x+4y,2x+3y)$ and preserves $x^2-2y^2$, providing a concrete recurrence for all displayed families.
- **Scope:** A single positive solution or a single unit orbit would not be the requested set of all integer solutions. Both orbits and all integer powers are retained.
- **Routing:** Norm computations, explicit units, and Pell equations in an order are the primary tools.
