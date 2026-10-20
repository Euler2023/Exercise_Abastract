---
title: "Exercise R370: Rational p-adic Numbers and Eventually Periodic Digits"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 1, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise R370: Rational p-adic Numbers and Eventually Periodic Digits

## Problem Statement

> [!question] Neukirch II.1.1
> A $p$-adic number $a=\sum_{\nu=-m}^{\infty}a_\nu p^\nu\in\mathbb Q_p$ is a rational number if and only if the sequence of digits is periodic (possibly with a finite string before the first period).
>
> **Printed hint:** Write $p^m a=b+c\dfrac{p^\ell}{1-p^n}$, $0\le b<p^\ell$, $0\le c<p^n$.

## Hints

> [!hint]- Hint 1: Separate an initial string from a repeated block
> After multiplying by a power of $p$, work in $\mathbb Z_p$. A length-$n$ repeated block represents a geometric series with ratio $p^n$.

> [!hint]- Hint 2: Track an integer numerator, not an arbitrary rational tail
> For $p^m a=A/B$ with $p\nmid B$, choose each digit $d_j$ so that $r_j-Bd_j$ is divisible by $p$, and put $r_{j+1}=(r_j-Bd_j)/p$.

> [!hint]- Hint 3: Find a finite set of possible states
> The recurrence keeps $|r_j|\le\max(|A|,|B|)$ in the ordinary real absolute value. A repeated integer state forces every later digit to repeat.

## Solution

> [!success]- Independent derivation
> Choose $m\ge0$ so that $\alpha=p^m a\in\mathbb Z_p$. Shifting by this finite number of digit positions preserves eventual periodicity and rationality. Use the unique digits $\alpha=\sum_{j\ge0}d_jp^j$, $0\le d_j<p$.
>
> **1. An eventually periodic expansion is rational.** Suppose the period begins at index $\ell\ge0$ and has length $n\ge1$. Define the integers
> $$
> b=\sum_{j=0}^{\ell-1}d_jp^j,
> \qquad c=\sum_{j=0}^{n-1}d_{\ell+j}p^j.
> $$
> Then $0\le b<p^\ell$ and $0\le c<p^n$, including $b=0$ when $\ell=0$. Grouping digits by their identical blocks gives
> $$
> \alpha=b+p^\ell c\sum_{k\ge0}p^{nk}
> =b+\frac{cp^\ell}{1-p^n}\in\mathbb Q.
> $$
> The geometric identity is an equality of compatible residues, rather than of real convergent series: its finite partial sum $G_N$ satisfies $(1-p^n)G_N=1-p^{nN}$, and the last term vanishes modulo every fixed power of $p$ once $N$ is large. The denominator $1-p^n$ is prime to $p$. Multiplication by it is invertible in every residue ring, so the identity holds in $\mathbb Z_p$. Thus $a=p^{-m}\alpha$ is rational. This is precisely the printed hint, with the initial string and repeated block identified.
>
> **2. A rational number has an eventually periodic expansion.** Conversely suppose $\alpha=A/B$, where $A\in\mathbb Z$, $B\in\mathbb Z_{>0}$ and $p\nmid B$. Start with $r_0=A$. Given the integer $r_j$, there is a unique $d_j\in\{0,\ldots,p-1\}$ satisfying
> $$
> Bd_j\equiv r_j\pmod p,
> \qquad r_{j+1}=\frac{r_j-Bd_j}{p}\in\mathbb Z.
> $$
> Existence and uniqueness use the inverse of $B$ modulo $p$. Induction gives
> $$
> A=B\sum_{j=0}^{N-1}d_jp^j+p^N r_N.
> $$
> Because $B$ is prime to $p$, this identity shows that the first $N$ chosen digits represent $A/B$ modulo $p^N$. Uniqueness of digit representatives therefore identifies them with the canonical expansion of $\alpha$.
>
> Put $C=\max(|A|,B)$, with the ordinary real absolute value. If $|r_j|\le C$, then
> $$
> |r_{j+1}|\le\frac{|r_j|+B(p-1)}p\le C.
> $$
> The bound holds at $j=0$, hence at every step. There are only $2C+1$ integers in $[-C,C]$, so some $r_i=r_j$ with $i<j$. Both the next digit and the next state are deterministic functions of the current state. Induction now gives $d_{i+k}=d_{j+k}$ for all $k\ge0$. The expansion is periodic from index $i$, with period length $j-i$.
>
> This includes $A=0$ and terminating expansions: a tail of zeros is a period of length one. A repeated block of $p-1$ is also permitted, as illustrated by $-1=\sum_{j\ge0}(p-1)p^j$. These are canonical $p$-adic digits, not real positional expansions. Undoing the initial shift proves both directions for every $a\in\mathbb Q_p$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source verification:** The entire numbered exercise and its printed hint was visually checked at [S4, Ch. II, §1, Exercise 1, printed p. 106, PDF p. 125]. The §2 body heading below the sixth exercise confirms the end of this group. No source figure is required.
- **Proof inputs:** The digit representatives and the compatible-residue construction are source-proved in Proposition (1.2), printed pp. 100–101 / PDF pp. 119–120, and Proposition (1.3) with the ring interpretation, printed pp. 103–104 / PDF pp. 122–123. The repeated-block formula and bounded-state proof are independent derivations here.
- **Terminology:** “Periodic (possibly with a finite string before the first period)” means eventually periodic; it does not require repetition from the first displayed digit. All digits satisfy $0\le d_j<p$, and an all-zero tail is allowed.
- **Routing:** Ring Theory is primary because finite congruences, canonical residues and an integer remainder recurrence establish the equivalence. No field-extension or Galois argument is used.
