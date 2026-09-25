---
title: "Exercise F110: Distinct p-Adic Fields Are Not Isomorphic"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - p-adic-fields
  - roots-of-unity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 10, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise F110: Distinct p-Adic Fields Are Not Isomorphic

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 10
> Show that if $p,p'$ are two distinct prime numbers, then the fields $\mathbb Q_p$ and $\mathbb Q_{p'}$ are not isomorphic.

## Hints

> [!hint]- Hint 1: Use algebraic invariants
> A field isomorphism preserves its roots of unity and its group of nonzero elements modulo squares.

> [!hint]- Hint 2: Odd residue characteristic
> For odd $p$, simple roots of $X^{p-1}-1$ lift from $\mathbb F_p$, while no nontrivial $p$-power root of unity lies in $\mathbb Q_p$.

> [!hint]- Hint 3: Separate $p=2$
> Compare the number of square classes in $\mathbb Q_2^\times$ with that in $\mathbb Q_p^\times$ for odd $p$.

## Solution

> [!success]- Solution
> **Odd primes.** Let $p$ be odd. The reduction map $\mathbb Z_p^\times\to\mathbb F_p^\times$ maps roots of unity of order prime to $p$ injectively: if $u^m=1$, $p\nmid m$, and $u\equiv1\pmod p$, then
>
> $$
> 0=u^m-1=(u-1)(1+u+\cdots+u^{m-1}),
> $$
>
> and the second factor reduces to the nonzero element $m$ of $\mathbb F_p$, forcing $u=1$. Conversely, every $a\in\mathbb F_p^\times$ lifts to a root of $X^{p-1}-1$ in $\mathbb Z_p$ by the simple-root form of Hensel's lemma, because its derivative $(p-1)a^{p-2}$ is nonzero modulo $p$. Thus the prime-to-$p$ roots of unity form a group of order $p-1$.
>
> There is no nontrivial $p$-th root of unity in $\mathbb Q_p$. Indeed, such a root $\zeta$ must be a unit and reduce to $1$ modulo $p$, so write $\zeta=1+y$ with $r=v_p(y)\geq1$. If $\zeta\ne1$, the binomial relation
>
> $$
> 0=(1+y)^p-1
> =py+\sum_{j=2}^{p-1}\binom pj y^j+y^p
> $$
>
> has a unique term of smallest valuation: $v_p(py)=r+1$, whereas every middle term has valuation at least $1+2r>r+1$ and $v_p(y^p)=pr>r+1$ because $p\geq3$. In a non-Archimedean field a sum with a unique term of smallest valuation cannot vanish, a contradiction. A nontrivial root of unity of order divisible by $p$ would yield one of order $p$, so the full torsion subgroup $\mu(\mathbb Q_p)$ has exactly $p-1$ elements. Consequently, two fields $\mathbb Q_p$ and $\mathbb Q_{p'}$ with distinct odd primes cannot be isomorphic.
>
> **The prime $2$.** For odd $p$, every $x\in\mathbb Q_p^\times$ is $p^r u$ with $u\in\mathbb Z_p^\times$. A unit is a square exactly when its residue is a square in $\mathbb F_p^\times$: necessity is immediate, and sufficiency follows by Hensel's lemma applied to $X^2-u$, whose derivative at a nonzero residue root is a unit. There are two unit square classes, and the parity of $r$ gives two more choices; hence
>
> $$
> \bigl|\mathbb Q_p^\times/(\mathbb Q_p^\times)^2\bigr|=4
> \qquad(p\text{ odd}).
> $$
>
> In $\mathbb Q_2$, an odd unit is a square exactly when it is congruent to $1$ modulo $8$. An odd square is $1$ modulo $8$. Conversely, if $u\equiv1\pmod8$, then for $g(X)=X^2-u$ one has $v_2(g(1))\geq3>2v_2(g'(1))=2$, so Lang's Newton criterion, Proposition 7.6, gives a root in $\mathbb Q_2$. The four odd residue classes modulo $8$ and the parity of $v_2(x)$ therefore yield
>
> $$
> \bigl|\mathbb Q_2^\times/(\mathbb Q_2^\times)^2\bigr|=8.
> $$
>
> The square-class group is invariant under abstract field isomorphism. Hence $\mathbb Q_2$ is not isomorphic to any $\mathbb Q_p$ with $p$ odd. Together with the odd-prime argument, this proves the assertion for all distinct primes.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Notes

- **Routing:** The target is nonisomorphism of fields; roots of unity and square classes are the decisive abstract-field invariants.
- **Source and proof status:** [S2, Ch. XII, Ex. 10, printed p. 497, PDF p. 512]. The field-invariant proof is independent. It uses the simple-root Hensel lifting supplied by Lang's Corollary 7.4 [S2, Ch. XII, §7, printed p. 493, PDF p. 508] and his Newton criterion, Proposition 7.6, on the same page.
- **Terminology:** This proves nonisomorphism even without requiring an isomorphism to respect the $p$-adic topologies.
