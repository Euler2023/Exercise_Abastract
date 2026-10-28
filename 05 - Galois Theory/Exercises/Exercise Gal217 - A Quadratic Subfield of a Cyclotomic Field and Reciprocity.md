---
title: "Exercise Gal217: A Quadratic Subfield of a Cyclotomic Field and Reciprocity"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.1, Exercise 9.1.2, printed pp. 378–379, PDF pp. 390–391"
source_refs:
  - "S7/ch-9/sec-1/ex-2"
created: 2026-10-28
---

# Exercise Gal217: A Quadratic Subfield of a Cyclotomic Field and Reciprocity

## Problem Statement

> [!question] Original Exercise 9.1.2
> Let $q$ be an odd prime and $q^*=(-1)^{(q-1)/2}q$ (the one of $\pm q$ congruent to $1$ modulo $4$). Consider
> $$
> F_0=\mathbb Q(\sqrt{q^*}),\qquad F=\mathbb Q(\mu_q).
> $$
> (a) Show $F_0\subset F$ as follows. Substitute $X=1$ in
> $$
> \sum_{i=0}^{q-1}X^i=\prod_{i=1}^{q-1}(X-\mu_q^i)
> $$
> to obtain the first equality in
> $$
> q=\prod_{i=1}^{q-1}(1-\mu_q^i)
> =\prod_{i=1}^{(q-1)/2}(1-\mu_q^i)(1-\mu_q^{-i})
> =\prod_{i=1}^{(q-1)/2}(-\mu_q^{-i})(1-\mu_q^i)^2.
> $$
> Note that $\mu_q=(\mu_q^{(q+1)/2})^2$ is a square in $F$. Explain why the display makes $q^*$ a square as well.
>
> (b) In the square with top row $\operatorname{Gal}(F/\mathbb Q)\cong(\mathbb Z/q\mathbb Z)^*$ from (9.4), bottom row $\operatorname{Gal}(F_0/\mathbb Q)\cong\{\pm1\}$ from (9.3), and left arrow restriction, show the determined right arrow sends $p\pmod q$ to $(q^*/p)$ for every odd prime $p\ne q$. Its well-definedness is the main part of quadratic reciprocity.

## Hints

> [!hint]- Hint 1
> Pair the factors indexed by $i$ and $-i$ and separate the sign.

> [!hint]- Hint 2
> Restrict arithmetic Frobenius from the cyclotomic field to its quadratic subfield.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Let $m=(q-1)/2$ and $s=1+\cdots+m=m(m+1)/2$. The factor pairing gives
> $$
> q=(-1)^m\mu_q^{-s}\left(\prod_{i=1}^m(1-\mu_q^i)\right)^2.
> $$
> Thus $q^*=\mu_q^{-s}\prod_{i=1}^m(1-\mu_q^i)^2$. Writing $u=\mu_q^{(q+1)/2}$, so $u^2=\mu_q$, the explicit element $u^{-s}\prod_{i=1}^m(1-\mu_q^i)$ has square $q^*$. This proves the inclusion. Since $q^*$ is not a rational square, it is a genuine quadratic subfield.
>
> **(b).** For $p\ne q$ both extensions are unramified at the odd prime $p$. Arithmetic Frobenius in $F$ sends $\mu_q$ to $\mu_q^p$, corresponding to $p\pmod q$. Frobenius restricts to Frobenius on a subfield: reduce the identity $x^{\operatorname{Frob}}\equiv x^p$ to the smaller residue field. In $F_0$ it sends $\sqrt{q^*}$ to $(q^*/p)\sqrt{q^*}$, by Euler's criterion in the residue field, exactly (9.3). This proves the requested arrow.
>
> One can also identify that arrow explicitly. Restriction is a nontrivial surjection, since $F_0/\mathbb Q$ is quadratic. The cyclic group $(\mathbb Z/q\mathbb Z)^*$ has a unique nontrivial character to $\{\pm1\}$, namely the Legendre character. Consequently $(q^*/p)=(p/q)$. Multiplicativity of the Legendre symbol and $(-1/p)=(-1)^{(p-1)/2}$ yield
> $$
> (q/p)(p/q)=(-1)^{((p-1)/2)((q-1)/2)},
> $$
> the usual quadratic reciprocity law for distinct odd primes.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced context:** (9.3) and (9.4), printed pp. 376–377, PDF pp. 388–389, give the Frobenius descriptions; (9.4) was directly inspected with the exercise pages.
- **Imported inputs:** Cyclicity of the multiplicative group of a finite field and the unramified Frobenius restriction law. No reciprocity law is assumed in the proof.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
