---
title: "Exercise R373: Five-adic Expansions of Two Thirds and Minus Two Thirds"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 4, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise R373: Five-adic Expansions of Two Thirds and Minus Two Thirds

## Problem Statement

> [!question] Neukirch II.1.4
> Write the numbers $\dfrac23$ and $-\dfrac23$ as $5$-adic numbers.

## Hints

> [!hint]- Hint 1: Read the first digit modulo five
> The inverse of $3$ modulo $5$ is $2$, so the first digits of $2/3$ and $-2/3$ are $4$ and $1$, respectively.

> [!hint]- Hint 2: Remove the first digit and divide by five
> For a rational tail $z$, the next tail is $(z-d)/5$, where $d\in\{0,1,2,3,4\}$ represents $z$ modulo $5$. The tails $-2/3$ and $-1/3$ form a two-step cycle.

> [!hint]- Hint 3: Verify both repeating blocks algebraically
> The repeating block $1,3$ gives $\sum_{k\ge0}(5^{2k}+3\cdot5^{2k+1})=16/(1-25)$. Prefixing the digit $4$ and shifting this block by one position gives $2/3$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The denominator $3$ is prime to $5$, so both numbers are in $\mathbb Z_5$ and have no negative-power digits. We list digits from the constant term toward higher powers.
>
> For $z\in\mathbb Z_{(5)}$, choose its digit $d\in\{0,1,2,3,4\}$ modulo $5$ and write $z=d+5z'$. The successive states here are
>
> | Tail $z$ | First digit $d$ | Next tail $z'=(z-d)/5$ |
> |---|---|---|
> | $2/3$ | $4$ | $-2/3$ |
> | $-2/3$ | $1$ | $-1/3$ |
> | $-1/3$ | $3$ | $-2/3$ |
>
> For example, $(2/3-4)/5=-2/3$ and $(-1/3-3)/5=-2/3$. The last two states repeat. Therefore the required expansions are
> $$
> \frac23=4+5+3\cdot5^2+5^3+3\cdot5^4+5^5+\cdots
> =4+\sum_{k\ge0}\bigl(5^{2k+1}+3\cdot5^{2k+2}\bigr),
> $$
> and
> $$
> -\frac23=1+3\cdot5+5^2+3\cdot5^3+5^4+3\cdot5^5+\cdots
> =\sum_{k\ge0}\bigl(5^{2k}+3\cdot5^{2k+1}\bigr).
> $$
> All coefficients are canonical digits. For an independent algebraic check, put $G=\sum_{k\ge0}25^k$. Its finite geometric identities give $(1-25)G=1$ in every finite $5$-power quotient, hence $G=(1-25)^{-1}$ in $\mathbb Z_5$. Thus the second series equals
> $$
> (1+3\cdot5)G=\frac{16}{1-25}=-\frac23,
> $$
> and the first equals
> $$
> 4+(5+3\cdot25)G
> =4+\frac{80}{1-25}=\frac23.
> $$
> These identities verify the entire infinite expansions. In particular, the first number has a one-digit initial string followed by the block $1,3$, whereas the second repeats that block from the start. Their sum is zero with carry at every position: the constant digits sum to $5$, and each higher column has sum $1+3+1=5$. Digitwise addition without carrying would give the wrong answer.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source verification:** The entire numbered exercise was visually checked at [S4, Ch. II, §1, Exercise 4, printed p. 106, PDF p. 125]. The §2 body heading below the sixth exercise confirms the end of this group. No source figure is required.
- **Source fidelity:** The original page clearly prints $2/3$ and $-2/3$. The text extraction drops the numerators and can misleadingly suggest $3$ and $-3$; the statement above follows the rendered original. This is an extraction issue, not an error in the source.
- **Proof inputs:** Canonical digit representatives and the inverse-limit ring construction are from [S4, Ch. II, §1, Proposition (1.2), printed pp. 100–101 / PDF pp. 119–120; Proposition (1.3) and ring discussion, printed pp. 103–104 / PDF pp. 122–123]. The explicit tails, repeating blocks and geometric checks are independent calculations.
- **Related exercises:** [[02 - Ring Theory/Exercises/Exercise R370 - Rational p-adic Numbers and Eventually Periodic Digits|R370]] proves the general rational-periodicity criterion; [[02 - Ring Theory/Exercises/Exercise R374 - Arithmetic with p-adic Digits|R374]] gives all four digit algorithms, including the necessary carries.
- **Routing:** Ring Theory is primary because modular digits and an inverse geometric series compute the two elements.
