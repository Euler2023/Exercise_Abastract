---
title: "Exercise R337: Nonunique Irreducible Factorizations of Fifty-Four"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 2, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R337: Nonunique Irreducible Factorizations of Fifty-Four

## Problem Statement

> [!question] Neukirch I.3.2
> Show that
> $$
> 54=2\cdot3^3
> =\frac{13+\sqrt{-47}}2\cdot\frac{13-\sqrt{-47}}2
> $$
> are two essentially different decompositions into irreducible integral elements of $\mathbb Q(\sqrt{-47})$.

## Hints

> [!hint]- Hint 1: Include the half-integral elements
> The full integer ring is $\mathcal O_K=\mathbb Z[(1+\sqrt{-47})/2]$. Write its elements as $(a+b\sqrt{-47})/2$ with $a\equiv b\pmod2$, and compute their norms.

> [!hint]- Hint 2: Rule out small norms
> If $b\neq0$, then $N((a+b\sqrt{-47})/2)\geq47/4$. If $b=0$, the parity condition makes the element an integer, so its norm is an integer square. In particular, no element has norm $2$, $3$, or $6$.

> [!hint]- Hint 3: A proper factor of an element of norm $54$
> If an element of norm $54$ factors into two nonunits, the smaller factor norm is a divisor of $54$ between $2$ and $\sqrt{54}$. List these divisors. Finally compare the two factorizations up to units and reordering.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $s=\sqrt{-47}$ and $K=\mathbb Q(s)$. Since $-47\equiv1\pmod4$, [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333, Step 3]] gives
> $$
> \mathcal O_K=\mathbb Z\left[\frac{1+s}{2}\right]
> =\left\{\frac{a+bs}{2}:a,b\in\mathbb Z,\ a\equiv b\pmod2\right\}.
> $$
> Its norm is
> $$
> N\left(\frac{a+bs}{2}\right)=\frac{a^2+47b^2}{4}.
> $$
> This is a positive integer for nonzero elements and is multiplicative.
>
> **1. Determine the units and exclude three possible norms.** An element is a unit if and only if its norm is $1$: one direction follows by taking norms of an inverse, and the other uses $u^{-1}=\overline u$. If $a^2+47b^2=4$, then $b=0$ and $a=\pm2$. Thus
> $$
> \mathcal O_K^\times=\{1,-1\}.
> $$
> If $b\neq0$, then
> $$
> N\left(\frac{a+bs}{2}\right)\geq\frac{47}{4}>6.
> $$
> If $b=0$, then $a$ is even and the norm is $(a/2)^2$. None of $2,3,6$ is an integer square. It follows that
> $$
> \text{there is no element of }\mathcal O_K\text{ with norm }2,3,\text{ or }6.
> $$
>
> **2. Prove that $2$ and $3$ are irreducible.** Their norms are $N(2)=4$ and $N(3)=9$, so both are nonunits. If $2=uv$ with $u,v$ nonunits, positive integer norms would satisfy $N(u)N(v)=4$ with both factors at least $2$. Both would have to be $2$, which Step 1 excludes. Similarly, a factorization of $3$ into two nonunits would require $N(u)=N(v)=3$, also impossible. Thus $2$ and $3$ are irreducible in the full integer ring.
>
> **3. Prove that the two half-integral factors are irreducible.** Set
> $$
> \alpha=\frac{13+s}{2},\qquad
> \overline\alpha=\frac{13-s}{2}.
> $$
> Both belong to $\mathcal O_K$ by the parity condition, and
> $$
> N(\alpha)=N(\overline\alpha)=\frac{13^2+47}{4}=54.
> $$
> If $\alpha=uv$ with $u,v$ nonunits, then $N(u),N(v)\geq2$ and $N(u)N(v)=54$. Interchanging $u,v$ if necessary gives $2\leq N(u)\leq\sqrt{54}<8$. The only divisors of $54$ in this interval are $2,3,6$, all excluded in Step 1. Thus $\alpha$ is irreducible. The identical norm argument proves that $\overline\alpha$ is irreducible as well.
>
> **4. Verify the equality and the difference of factorizations.** Multiplication gives
> $$
> \alpha\overline\alpha
> =\frac{169-s^2}{4}
> =\frac{169+47}{4}=54=2\cdot3\cdot3\cdot3.
> $$
> All the displayed factors are irreducible by Steps 2 and 3. Two irreducible decompositions are considered essentially the same if they differ only by reordering the factors and multiplying factors by units, with the product of these units accounted for. These operations preserve the number of irreducible factors. Here one decomposition has four factors and the other has two, so they are essentially different. Also, associates have the same norm, while the two half-integral factors have norm $54$ and the rational factors have norms $4$ and $9$; none can be matched across the two decompositions.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Source status:** [S4, Ch. I, §3, Exercise 2, printed p. 23, PDF p. 42]. The integer $54$, exponent $3$, numerator $13\pm\sqrt{-47}$, and both denominators $2$ were checked on the rendered original page. No source figure is needed.
- **Proof inputs:** The full quadratic integer-ring formula is imported from the complete independent proof in [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333]]. The remaining proof uses conjugation, multiplicativity of the quadratic norm, and positive integer divisor calculations. All unit and irreducibility arguments are supplied above.
- **Proof boundary:** The argument is in $\mathcal O_K$, which strictly contains $\mathbb Z[\sqrt{-47}]$. Irreducibility in a smaller order would not suffice. Composite norm does not imply reducibility: the norms $4$, $9$, and $54$ yield irreducible elements here because the necessary factor norms cannot occur.
- **Routing:** Ring Theory is primary because the task establishes failure of unique factorization through units and irreducible elements, without using ideal-class calculations.
