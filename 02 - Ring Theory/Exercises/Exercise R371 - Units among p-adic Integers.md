---
title: "Exercise R371: Units among p-adic Integers"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 2, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise R371: Units among p-adic Integers

## Problem Statement

> [!question] Neukirch II.1.2
> A $p$-adic integer $a=a_0+a_1p+a_2p^2+\cdots$ is a unit in the ring $\mathbb Z_p$ if and only if $a_0\ne0$.

## Hints

> [!hint]- Hint 1: Reduce a putative inverse modulo p
> The image of a unit under $\mathbb Z_p\to\mathbb F_p$ must be a unit. The image of $a$ is its first digit $a_0$.

> [!hint]- Hint 2: Invert every finite truncation
> If $a_0\ne0$, the residue of $a$ modulo $p^n$ is prime to $p$, hence is invertible in $\mathbb Z/p^n\mathbb Z$.

> [!hint]- Hint 3: Use uniqueness to obtain compatibility
> The inverse modulo $p^{n+1}$ reduces to the inverse modulo $p^n$. These inverse residues form an element of the inverse limit, whose product with $a$ is $1$.

## Solution

> [!success]- Independent derivation
> Use the ring identification
> $$
> \mathbb Z_p=\varprojlim_n\mathbb Z/p^n\mathbb Z.
> $$
> The projections are ring homomorphisms, and an element is zero if every projected residue is zero.
>
> **1. Necessity.** If $ab=1$ in $\mathbb Z_p$, reduction modulo $p$ gives $a_0b_0=1$ in $\mathbb F_p$. Thus $a_0\ne0$.
>
> **2. Sufficiency.** Suppose $a_0\ne0$. Write $A_n=\sum_{j=0}^{n-1}a_jp^j$. Then $p\nmid A_n$, so $\gcd(A_n,p^n)=1$. Bézout's identity gives integers $u_n,v_n$ with $A_nu_n+p^nv_n=1$. Hence $\bar A_n$ has an inverse $b_n=\bar u_n$ in $\mathbb Z/p^n\mathbb Z$.
>
> Reducing $b_{n+1}\bar A_{n+1}=1$ modulo $p^n$ gives an inverse to $\bar A_n$. An inverse is unique: if $xy=xz=1$ in a commutative ring, then $y=y(xz)=(yx)z=z$. Therefore $b_{n+1}$ reduces to $b_n$. The compatible sequence $(b_n)$ defines $b\in\mathbb Z_p$, and the product $ab$ projects to $1$ for every $n$. The inverse-limit description implies $ab=1$ in $\mathbb Z_p$.
>
> **3. The local-ring interpretation.** A $p$-adic integer has first digit zero exactly when it is $p$ times another $p$-adic integer: remove or insert the leading zero digit. Thus the nonunits form $p\mathbb Z_p$, and
> $$
> \mathbb Z_p/p\mathbb Z_p\cong\mathbb F_p.
> $$
> This ideal is maximal. Every proper ideal contains no unit and therefore lies inside it, proving that it is the unique maximal ideal.
>
> Every nonzero $x\in\mathbb Z_p$ has a least nonzero digit, say at index $k$, so $x=p^ku$ with $u$ a unit. If $y=p^\ell v\ne0$, then $xy=p^{k+\ell}uv$ and the first digit of $uv$ is the nonzero product of those of $u,v$ modulo $p$. In particular the product is nonzero and its first nonzero index is $k+\ell$. This explains the familiar multiplicativity of the first-digit valuation without assuming a result from a later section.
>
> For example, $2/3\in\mathbb Z_5$ has first digit $4$ and inverse $3/2\in\mathbb Z_5$, also with first digit $4$; indeed $4\cdot4\equiv1\pmod5$. In contrast $5\in\mathbb Z_5$ has first digit zero, so its inverse exists in $\mathbb Q_5$ but not in $\mathbb Z_5$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Notes

- **Source verification:** The entire numbered exercise was visually checked at [S4, Ch. II, §1, Exercise 2, printed p. 106, PDF p. 125]. The §2 body heading below the sixth exercise confirms the end of this group. No source figure is required.
- **Proof inputs:** Proposition (1.3) and the following ring construction are in [S4, Ch. II, §1, printed pp. 103–104, PDF pp. 122–123]. The finite-ring inverses follow directly from Bézout's identity. The unit criterion, compatibility argument and first-digit factorization above are independent derivations.
- **Related exercise:** [[02 - Ring Theory/Exercises/Exercise R224 - The p-Adic Integers as an Inverse Limit|R224]] treats the inverse-limit construction from Lang. This note independently retains Neukirch's numbered Exercise II.1.2; the two source exercises are not merged.
- **Boundary:** The criterion includes $a=0$ as a nonunit. It holds for every prime $p$, including $2$; no assumption that the unit is rational is needed.
- **Routing:** Ring Theory is primary because reduction maps, units and the local ring determine the proof.
