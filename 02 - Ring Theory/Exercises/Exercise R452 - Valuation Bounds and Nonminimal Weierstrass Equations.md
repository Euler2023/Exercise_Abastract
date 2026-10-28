---
title: "Exercise R452: Valuation Bounds and Nonminimal Weierstrass Equations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.1, printed p. 331, PDF p. 344"
source_refs:
  - "S7/ch-8/sec-3/ex-1"
created: 2026-10-28
---

# Exercise R452: Valuation Bounds and Nonminimal Weierstrass Equations

## Problem Statement

> [!question] Original Exercise 8.3.1
> Let $p>3$ be prime. Let $E$ be a Weierstrass equation over $\mathbb Q$ with integral coefficients, and suppose $\nu_p(\Delta)\ge12$ and $\nu_p(c_4)\ge4$. Show that $\nu_p(c_6)\ge6$ as well. The admissible changes from Section 8.1 put $E$ in form (8.3), multiplying its discriminant by $6^{12}$, so $\nu_p(\Delta_{(8.3)})=\nu_p(\Delta)$. Show that then $(x,y)=(p^2x',p^3y')$ gives an integral equation $E'$ with $\nu_p(\Delta')=\nu_p(\Delta)-12$. Thus $E$ is not globally minimal. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use $c_6^2=c_4^3-1728\Delta$.

> [!hint]- Hint 2
> Write the short model explicitly before dividing the coordinates by powers of $p$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> The invariant identity is $1728\Delta=c_4^3-c_6^2$. Since $p>3$, the integer $1728$ is a $p$-adic unit. The hypotheses make both $c_4^3$ and $1728\Delta$ divisible by $p^{12}$. Hence
> $$
> c_6^2=c_4^3-1728\Delta
> $$
> is divisible by $p^{12}$, giving $\nu_p(c_6)\ge6$.
>
> The integral short equation (8.3) is $y^2=x^3-27c_4x-54c_6$. Its discriminant is $6^{12}\Delta$, whose $p$-valuation is unchanged. Substitution and division by $p^6$ give
> $$
> (y')^2=(x')^3-\frac{27c_4}{p^4}x'-\frac{54c_6}{p^6}.
> $$
> The coefficients are integers by the divisibility just proved. Discriminants scale by $p^{-12}$, so its $p$-valuation is $\nu_p(\Delta)-12$, strictly smaller. Thus the original equation was not $p$-minimal and in particular cannot have been globally minimal. The possible extra powers of $2$ and $3$ in passing to (8.3) do not affect this conclusion at $p>3$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 331 / PDF p. 344. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
