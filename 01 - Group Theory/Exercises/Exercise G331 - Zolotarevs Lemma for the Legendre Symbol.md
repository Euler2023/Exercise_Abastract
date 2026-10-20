---
title: "Exercise G331: Zolotarev's Lemma for the Legendre Symbol"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 7, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise G331: Zolotarev's Lemma for the Legendre Symbol

## Problem Statement

> [!question] Neukirch I.8.7
> Let $(a,p)=1$ and $a\nu\equiv r_\nu\bmod p$, $\nu=1,\ldots,p-1$, $0<r_\nu<p$. Then the $r_\nu$ give a permutation $\pi$ of the numbers $1,\ldots,p-1$. Show that $\operatorname{sgn}\pi=\left(\frac ap\right)$.

The prime $p$ is odd, as in the source's Legendre-symbol discussion.

## Hints

> [!hint]- Hint 1
> Choose a generator $g$ of the cyclic group $\mathbb F_p^\times$. Multiplication by $g$ is one cycle of length $p-1$.

> [!hint]- Hint 2
> Write $a\equiv g^k\pmod p$. Multiplication by $a$ is the $k$-th power of multiplication by $g$. Use the sign of a cycle and multiplicativity of the sign.

> [!hint]- Hint 3
> Since $p-1$ is even, $g^k$ is a square in $\mathbb F_p^\times$ exactly when $k$ is even. Compare this parity with the permutation sign.

## Solution

> [!success]- Independent derivation
> Since $a$ is invertible modulo $p$, distinct $\nu$ have distinct $r_\nu$, so these representatives form the stated permutation. Identify $1,\ldots,p-1$ with the nonzero residue classes. Under this identification, $\pi$ is the multiplication permutation
> $$
> M_a:\mathbb F_p^\times\longrightarrow\mathbb F_p^\times,
> \qquad x\longmapsto ax.
> $$
> **1. Compute the sign using a generator.** The multiplicative group $\mathbb F_p^\times$ is cyclic of order $p-1$. Choose a generator $g$. Multiplication by $g$ is the single cycle
> $$
> M_g=(1\;g\;g^2\;\cdots\;g^{p-2}).
> $$
> A cycle of length $m$ is a product of $m-1$ transpositions, so its sign is $(-1)^{m-1}$. Since $p$ is odd,
> $$
> \operatorname{sgn}(M_g)=(-1)^{p-2}=-1.
> $$
> Write $a\equiv g^k\pmod p$ with $0\le k<p-1$. Then $M_a=M_g^k$. Multiplicativity of the sign gives the integer equality
> $$
> \operatorname{sgn}\pi
> =\operatorname{sgn}(M_a)
> =\operatorname{sgn}(M_g)^k=(-1)^k.
> $$
>
> **2. Read the Legendre symbol from the same exponent.** A nonzero residue $g^k$ is a square exactly when there is an integer $j$ with
> $$
> g^{2j}=g^k,
> \qquad\text{equivalently}\qquad 2j\equiv k\pmod{p-1}.
> $$
> Since $p-1$ is even, this congruence forces $k$ to be even; conversely, even $k$ permits $j=k/2$. By the definition of the Legendre symbol,
> $$
> \left(\frac ap\right)
> =\begin{cases}1,&k\text{ even},\\-1,&k\text{ odd},\end{cases}
> =(-1)^k=\operatorname{sgn}\pi.
> $$
> Thus the same exponent parity detects both the square class and the permutation sign, proving the claim.

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cyclic Groups]]
- [[03 - Field Theory/Concepts/Finite Fields]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 7, printed p. 53, PDF p. 72]. No source figure is required.
- **Proof status and source input:** This is an independent cycle proof. The source's Legendre-symbol discussion explicitly uses cyclicity of $\mathbb F_p^\times$ of order $p-1$ and the definition by square classes [S4, Ch. I, §8, printed p. 50, PDF p. 69]; cyclicity is the imported finite-field input, also recorded in the linked finite-field concept. The cycle sign, power-permutation calculation, and square-class parity are derived above. Euler's criterion is not needed.
- **Boundary and routing:** The source's Legendre symbol is defined for odd primes. For $p=2$, the nonzero residue set is a singleton and its multiplication permutation has sign $1$, but the displayed Legendre symbol is outside that convention. The condition $(a,p)=1$ is essential: when $p\mid a$, multiplication does not permute $\mathbb F_p^\times$. Negative integer $a$ cause no problem because only its nonzero residue class is used. Group Theory is primary because a cyclic group action, a single cycle, and multiplicativity of permutation signs establish the result.

