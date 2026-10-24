---
title: "Exercise R357: Quadratic Residues Modulo a Composite Integer"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 6, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise R357: Quadratic Residues Modulo a Composite Integer

## Problem Statement

> [!question] Neukirch I.8.6
> Given a positive integer $b>1$, an integer $a$ relatively prime to $b$ is a quadratic residue mod $b$ if and only if it is a quadratic residue modulo each prime divisor $p$ of $b$, and if $a\equiv1\bmod4$ when $4\mid b$, $8\nmid b$, resp. $a\equiv1\bmod8$ when $8\mid b$.

## Hints

> [!hint]- Hint 1
> Factor $b$ into pairwise coprime prime powers and use the Chinese remainder theorem. For odd primes, lift one root a power at a time.

> [!hint]- Hint 2
> If $x^2\equiv a\bmod p^k$ and $p$ is odd, try $x+cp^k$. Solve one linear congruence for $c$ modulo $p$.

> [!hint]- Hint 3
> For powers of $2$, every odd square is $1\bmod8$. Starting at modulus $8$, try replacing an odd root modulo $2^k$ by $x+c2^{k-1}$ to correct its square modulo $2^{k+1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Write
> $$
> b=2^e\prod_{j=1}^r p_j^{e_j}
> $$
> with distinct odd primes $p_j$. Necessity follows by reducing a square modulo each prime. Since $(a,b)=1$, any root at an even modulus is odd. Odd squares are $1\bmod4$ and $1\bmod8$, giving the stated extra conditions.
>
> For sufficiency, first let $p$ be odd and suppose $x^2\equiv a\bmod p^k$. Since $p\nmid a$, $p\nmid x$. For $y=x+cp^k$,
> $$
> y^2\equiv x^2+2xc\,p^k\pmod{p^{k+1}}.
> $$
> Choose $c$ modulo $p$ satisfying $2xc\equiv(a-x^2)/p^k\bmod p$; this is possible because $2x$ is invertible. Starting from a root modulo $p$, induction gives a root modulo every $p^{e_j}$.
>
> If $e=0$ there is no even component. If $e=1$, every odd $a$ is $1\bmod2$ and has a root. If $e=2$, the hypothesis $a\equiv1\bmod4$ supplies a root. For $e\ge3$, start with $x=1$ modulo $8$. Suppose $x$ is odd and $x^2\equiv a\bmod2^k$, $k\ge3$. For $c\in\{0,1\}$,
> $$
> (x+c2^{k-1})^2
> \equiv x^2+c\,2^k x\pmod{2^{k+1}},
> $$
> because $2k-2\ge k+1$. Since $x$ is odd, the two choices of $c$ give the two possible lifts of $x^2$ from modulus $2^k$ to modulus $2^{k+1}$. Choose the one agreeing with $a$. This proves existence of roots at all required powers of $2$. The new root need not equal the old root modulo $2^k$; only the congruence for its square is being lifted.
>
> The Chinese remainder theorem combines these roots at the pairwise coprime prime-power moduli to give an integer $x$ with $x^2\equiv a\bmod b$. This proves sufficiency and the equivalence.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 6, printed p. 53, PDF p. 72]. No source figure is required.
- **Proof status and inputs:** The prime-power lifting arguments are supplied independently. The Chinese remainder theorem is the source input [S4, Ch. I, §3, Theorem (3.6), printed p. 21, PDF p. 40]. No Hensel lemma is imported.
- **Boundary and routing:** The coprimality hypothesis makes every relevant root a unit. The exponent-one factor $2$ imposes no extra condition; exponent two requires $1\bmod4$; higher exponents require $1\bmod8$. Ring Theory is primary because congruences, unit coefficients, and the product decomposition of the modulus do the work.

