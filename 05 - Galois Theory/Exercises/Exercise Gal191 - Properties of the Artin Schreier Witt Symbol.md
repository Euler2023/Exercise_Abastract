---
title: 'Exercise Gal191: Properties of the Artin Schreier Witt Symbol'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 5, printed p. 341, PDF p. 360
source_refs:
- S4/ch-V/sec-3/ex-5
created: '2026-10-23'
---

# Exercise Gal191: Properties of the Artin Schreier Witt Symbol

## Problem Statement

> [!question] Neukirch V.3.5
> Define, for $x\in W_n(K)$ and $a\in K^*$, the symbol $[x,a)\in W_n(\mathbb F_p)$ by
> $$
> [x,a):=\chi_x((a,L/K)),
> $$
> where $(\ ,L/K)$ is the norm residue symbol. Show:
>
> (i) $[x,a)=(a,K(\xi)/K)\xi-\xi$, if $\xi\in W_n(\overline K)$ with $\wp\xi=x$.
>
> (ii) $[x+y,a)=[x,a)+[y,a)$.
>
> (iii) $[x,ab)=[x,a)+[x,b)$.
>
> (iv) $[x,a)=0\Longleftrightarrow a\in N_{K(\xi)/K}K(\xi)^*$, where $\xi\in W_n(\overline K)$ is an element such that $\wp\xi=x$.
>
> (v) $[x,a)=0$ for all $a\in K^*\Longleftrightarrow x\in\wp W_n(K)$.
>
> (vi) $[x,a)=0$ for all $x\in W_n(K)\Longleftrightarrow a\in K^{*p^n}$.

## Hints

> [!hint]- Hint 1
> Use the character map in Exercise 4 with the corrected exponent $p^n$.

> [!hint]- Hint 2
> For (vi), finite characters of $K^*/K^{*p^n}$ separate points, even though that group is not finite in characteristic $p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Throughout take $L/K$ to be the maximal abelian extension of exponent dividing $p^n$, as required by the correction in Exercise 4.
>
> (i) Restriction compatibility of the norm residue symbol sends $(a,L/K)$ to $(a,K(\xi)/K)$. Inserting this in $\chi_x(\sigma)=\sigma\xi-\xi$ proves the formula. The extension $K(\xi)/K$ is finite cyclic of degree dividing $p^n$; its action on $\xi$ is faithful.
>
> (ii) If $\wp\xi=x$ and $\wp\eta=y$, then $\wp(\xi+\eta)=x+y$ and $\sigma(\xi+\eta)-(\xi+\eta)=\chi_x(\sigma)+\chi_y(\sigma)$. Hence the symbol is additive in the first variable.
>
> (iii) Reciprocity is a homomorphism and $\chi_x$ is an additive character, so $\chi_x(\operatorname{rec}(ab))=\chi_x(\operatorname{rec}(a))+\chi_x(\operatorname{rec}(b))$.
>
> (iv) By (i), vanishing means that the reciprocity element fixes $\xi$, hence is the identity of $G(K(\xi)/K)$. The local reciprocity kernel theorem identifies this condition with $a\in N_{K(\xi)/K}K(\xi)^*$.
>
> (v) If $x\in\wp W_n(K)$, the character is zero by Exercise 4, so every symbol vanishes. Conversely reciprocity is surjective on the finite group $G(K(\xi)/K)$. If every symbol vanishes, every element fixes $\xi$, so $\chi_x=0$ and Exercise 4 gives $x\in\wp W_n(K)$.
>
> (vi) A $p^n$-th power is killed by every exponent-$p^n$ character, giving one direction. For the other, put $B=K^*/K^{*p^n}$. The subgroup $K^{*p^n}$ is closed: on units the power map has compact image, and on valuations its image is $p^n\mathbb Z$. The quotient is the product of the finite valuation quotient with a profinite unit quotient; hence finite continuous characters separate its points. In more detail, a nonzero point survives in some finite quotient, of exponent dividing $p^n$; a cyclic-factor projection detects it in $\mathbb Z/p^n\mathbb Z\cong W_n(\mathbb F_p)$. Local reciprocity realizes that character as a character of the maximal abelian exponent-$p^n$ extension, and the surjectivity in Exercise 4 realizes it as $\chi_x$ for some $x$. Thus if all $[x,a)$ vanish, the class of $a$ in $B$ is zero. This is exactly $a\in K^{*p^n}$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier extensions]]
- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt vectors and Artin-Schreier-Witt theory]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]

## Notes

Original statement, all six parts: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 5, printed p. 341, PDF p. 360]. Independent derivation. It uses the corrected extension exponent from V.3.4. In positive characteristic $K^*/K^{*p^n}$ is generally infinite; the proof uses profinite separation rather than a false finiteness assertion.
