---
title: "Exercise R457: Integrality of Prime to p Torsion Coordinates"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.4, Exercise 8.4.5, printed p. 340, PDF p. 353"
source_refs:
  - "S7/ch-8/sec-4/ex-5"
created: 2026-10-28
---

# Exercise R457: Integrality of Prime to p Torsion Coordinates

## Problem Statement

> [!question] Original Exercise 8.4.5
> (a) Let $E$ be a $p$-minimal Weierstrass equation over $\mathbb Q$ in form (8.3), $y^2=x^3-27c_4x-54c_6$. Let $\mathfrak p$ lie above $p\ne2,3$, and let $N>0$ with $p\nmid N$. Show the $x$-coordinates of $E[N]$ are $\mathfrak p$-integral.
>
> (b) Show their $y$-coordinates are $\mathfrak p$-integral as well.

## Hints

> [!hint]- Hint 1
> Use a torsion polynomial whose leading coefficient is a power of $N$, hence a unit at $\mathfrak p$.

> [!hint]- Hint 2
> A root of a monic polynomial over a valuation ring is integral. Once $x$ is integral, use the Weierstrass equation for $y$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> The origin has no finite affine coordinates; both assertions concern $E[N]\setminus\{0_E\}$. Put $A=-27c_4$, $B=-54c_6$. The coefficients lie in the local valuation ring $V=\overline{\mathbb Z}_{(\mathfrak p)}$.
>
> We use the following precise standard input, the division-polynomial construction for $y^2=x^3+Ax+B$: for $N\ge2$ there is a polynomial $D_N(x)\in\mathbb Z[A,B,x]$ of degree $N^2-1$, with leading coefficient $N^2$, such that $D_N(x(P))=0$ for every nonidentity $N$-torsion point in characteristic zero. One can take $D_N=\psi_N^2$ after replacing $y^2$ by $x^3+Ax+B$ in the usual division polynomials. Its leading coefficient and integrality follow from the recursion
> $$
> \psi_{2m+1}=\psi_{m+2}\psi_m^3-\psi_{m-1}\psi_{m+1}^3,\quad
> \psi_{2m}=\frac{\psi_m}{2y}(\psi_{m+2}\psi_{m-1}^2-\psi_{m-2}\psi_{m+1}^2),
> $$
> starting with $\psi_1=1$, $\psi_2=2y$, $\psi_3=3x^4+6Ax^2+12Bx-A^2$, and $\psi_4=4y(x^6+5Ax^4+20Bx^3-5A^2x^2-4ABx-8B^2-A^3)$. The parity of the recursion makes the division by $2y$ cancel, and induction gives leading term $Nx^{(N^2-1)/2}$ for odd $N$, and $Nyx^{(N^2-4)/2}$ for even $N$. The vanishing property is the multiplication formula for $[N]$, equivalently the divisor of $\psi_N$. This input does not require good reduction, so it also covers the bad-reduction case allowed in the problem.
>
> (a) Because $p\nmid N$, $N^2$ is a unit of $V$. Therefore $D_N/N^2$ is monic with coefficients in $V$. If a root $x(P)$ had negative valuation, its highest-power term would have strictly smaller valuation than all lower terms and their sum could not vanish. Thus $x(P)\in V$. For $N=1$ there are no nonidentity points to consider.
>
> (b) The equation gives $y(P)^2=x(P)^3+Ax(P)+B\in V$. If $y(P)$ had negative valuation, so would its square, contradiction. Hence $y(P)\in V$. This proves both coordinate assertions. The proof uses the explicit division-polynomial input, not an assumption that a $p$-minimal equation has good reduction.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 340 / PDF p. 353. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **External standard input:** The division-polynomial multiplication theorem, with its recursion and exact leading coefficient stated above, is imported. The local integrality argument following it is independent. The origin is excluded only because affine coordinates there do not exist.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
