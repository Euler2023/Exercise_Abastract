---
title: "Exercise F127: Every Quadratic Number Field Lies in a Cyclotomic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §10, Exercise 3, printed p. 65, PDF p. 84"
created: 2026-10-20
---

# Exercise F127: Every Quadratic Number Field Lies in a Cyclotomic Field

## Problem Statement

> [!question] Neukirch I.10.3
> Every quadratic number field $\mathbb Q(\sqrt d)$ is contained in some cyclotomic field $\mathbb Q(\zeta_n)$, $\zeta_n$ a primitive $n$-th root of unity.

## Hints

> [!hint]- Hint 1: Reduce the radicand to signed prime factors
> Write the quadratic field with a squarefree integer $d\ne0,1$. For every odd prime $p$ dividing $d$, seek a square root of $p^*=(-1)^{(p-1)/2}p$ in $\mathbb Q(\zeta_p)$.

> [!hint]- Hint 2: Compute a quadratic Gauss sum
> Let $\chi$ be the Legendre symbol modulo $p$ and $\tau_p=\sum_{a\bmod p}\chi(a)\zeta_p^a$. Show $\overline{\tau_p}=\chi(-1)\tau_p$ and $\tau_p\overline{\tau_p}=p$.

> [!hint]- Hint 3: Supply the sign and the prime two
> Use $i=\zeta_4$ and $\sqrt2=\zeta_8+\zeta_8^{-1}$. Multiply suitable Gauss sums and these elements to produce an element whose square is $d$ inside $\mathbb Q(\zeta_{8\prod_{p\mid d,\ p\text{ odd}}p})$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Every quadratic number field can be written as $K=\mathbb Q(\sqrt d)$ with $d$ squarefree and $d\ne0,1$: completing the square in an irreducible quadratic gives a nonsquare rational radicand, and clearing its square factors gives this integer form.
>
> **1. Produce the odd-prime square roots.** For an odd prime $p$, let $\chi(a)=(a/p)$ for $a\in\mathbb F_p^\times$ and $\chi(0)=0$, and choose $\zeta_p=e^{2\pi i/p}$. Put
> $$
> \tau_p=\sum_{a\in\mathbb F_p}\chi(a)\zeta_p^a.
> $$
> The nonzero squares form an index-two subgroup of $\mathbb F_p^\times$, so $\chi$ is multiplicative, takes values $\pm1$ there, and $\sum_{a\ne0}\chi(a)=0$. Also $\chi(-1)=(-1)^{(p-1)/2}$, by cyclicity of $\mathbb F_p^\times$. Substituting $a\mapsto-a$ gives
> $$
> \overline{\tau_p}=\chi(-1)\tau_p.
> $$
> In its product with the conjugate sum, substitute $a=ub$ for $a,b\ne0$. Since $\chi(b)^2=1$,
> $$
> \begin{aligned}
> \tau_p\overline{\tau_p}
> &=\sum_{u\ne0}\chi(u)\sum_{b\ne0}\zeta_p^{(u-1)b}\\
> &=(p-1)-\sum_{u\ne0,1}\chi(u)=p.
> \end{aligned}
> $$
> For $u\ne1$ the inner sum is $-1$, because a nontrivial geometric sum over all $b\in\mathbb F_p$ is zero. Thus
> $$
> \tau_p^2=\chi(-1)p=:p^*.
> $$
> In particular, $\tau_p$ is a nonzero square root of $p^*$ in $\mathbb Q(\zeta_p)$.
>
> **2. Combine the generators.** Write
> $$
> d=\varepsilon\,2^e\prod_{p\in P}p,
> \qquad \varepsilon\in\{1,-1\},\quad e\in\{0,1\},
> $$
> where $P$ is the set of odd prime divisors of $d$. Set $N=8\prod_{p\in P}p$. Since $p\mid N$, $\zeta_N^{N/p}$ is a primitive $p$-th root; hence the Gauss-sum construction can be made inside $\mathbb Q(\zeta_N)$. This field also contains $i=\zeta_N^{N/4}$ and an element $\eta=\zeta_8+\zeta_8^{-1}$ with $\eta^2=2$, where $\zeta_8=\zeta_N^{N/8}$.
>
> Choose $k\in\{0,1\}$ so that
> $$
> (-1)^k\prod_{p\in P}(-1)^{(p-1)/2}=\varepsilon.
> $$
> Then the explicitly constructed element
> $$
> \beta=i^k\eta^e\prod_{p\in P}\tau_p\in\mathbb Q(\zeta_N)
> $$
> satisfies $\beta^2=d$. Products over an empty $P$ are $1$, covering $d=-1,2,-2$. Since $d$ is not a rational square, $\mathbb Q(\beta)$ is quadratic and equals $\mathbb Q(\sqrt d)$. Therefore $K\subseteq\mathbb Q(\zeta_N)$.
>
> Only an explicit cyclotomic overfield is requested; the conductor $N$ above need not be minimal.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §10, Exercise 3, printed p. 65, PDF p. 84]. No source figure is required. The solution is an independent derivation.
- **Source and proof boundary:** The source recalls the Gauss-sum square identity in the proof of Proposition (10.5), printed p. 63 / PDF p. 82. The computation and the assembled generator above are supplied independently, rather than invoking the general Kronecker–Weber theorem.
- **Inputs:** Elementary finite-field cyclicity and Legendre-symbol multiplicativity are imported; the two Gauss-sum identities and the sign adjustment are proved explicitly. If a chosen primitive root is replaced by another, the same identities hold, so choosing all roots inside one field causes no compatibility gap.
- **Routing:** The proof constructs square-root field generators and an explicit containing field. Field Theory is primary; no Galois-correspondence classification is used.
