---
title: 'Exercise AG63: Extending Compatible Finite and Infinite Characters'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 5, printed p. 484, PDF p. 503
source_refs:
- S4/ch-VII/sec-6/ex-5
created: '2026-10-23'
---

# Exercise AG63: Extending Compatible Finite and Infinite Characters

## Problem Statement

> [!question] Neukirch VII.6.5
> Show that every pair of characters $\chi_f:(\mathfrak o/\mathfrak m)^*\to S^1$ and $\chi_\infty:\mathbb R^*/\mathfrak o^{\mathfrak m}\to S^1$ such that
> $$
> \chi_f(\varepsilon)\chi_\infty(\varepsilon)=1\quad\text{for all }\varepsilon\in\mathfrak o^*
> $$
> comes from a Größencharakter mod $\mathfrak m$.

## Hints

> [!hint]- Hint 1
> First define a character of the subgroup of principal fractional ideals prime to $\mathfrak m$. The displayed unit relation gives independence of the generator.

> [!hint]- Hint 2
> Any character from a subgroup of an abelian group into $S^1$ extends to the whole group, because every complex number of modulus one has an $n$th root. Prove this extension step explicitly.

## Solution

> [!success]- Independent derivation
> Write $K^{(\mathfrak m)}=\{a\in K^*:v_{\mathfrak p}(a)=0\text{ for }\mathfrak p\mid\mathfrak m\}$, and let $P^{(\mathfrak m)}$ be its principal-ideal image in $J^{\mathfrak m}$. Reduction modulo $\mathfrak m$ defines $\chi_f(a)$ for every such fraction. Define
> $$
> \phi((a))=\chi_f(a)\chi_\infty(a),\qquad a\in K^{(\mathfrak m)}.
> $$
> If $(a)=(b)$ then $a/b=\varepsilon\in\mathfrak o^*$. The hypothesis gives
> $$
> \chi_f(a)\chi_\infty(a)=\chi_f(b)\chi_\infty(b)
> \chi_f(\varepsilon)\chi_\infty(\varepsilon)
> =\chi_f(b)\chi_\infty(b).
> $$
> Thus $\phi$ is well-defined, and multiplicativity follows from both given characters.
>
> We prove the required extension lemma. Let $H\le A$ be abelian and $\phi:H\to S^1$. Order all extensions to intermediate subgroups by inclusion. The union along a chain is an extension, so Zorn's lemma gives a maximal one, say on $H'$. If $x\notin H'$ and no positive power of $x$ lies in $H'$, choose any $z\in S^1$ and define $\phi'(hx^k)=\phi'(h)z^k$; the representation is unique. If some positive power lies in $H'$, take the least such $n$. Choose $z$ with $z^n=\phi'(x^n)$ and use the same formula. Two representations differ by $x^{k-l}\in H'$, hence $n\mid(k-l)$, and the root identity proves equal values. Both constructions extend to $\langle H',x\rangle$, contradicting maximality. Therefore the maximal domain is $A$.
>
> Apply the lemma to $P^{(\mathfrak m)}\le J^{\mathfrak m}$. The resulting character $\chi:J^{\mathfrak m}\to S^1$ agrees with $\phi$ on principal ideals, so
> $$
> \chi((a))=\chi_f(a)\chi_\infty(a)
> $$
> for every integral $a$ prime to $\mathfrak m$. This is exactly Definition (6.1). Its infinite part is continuous by the assumption on $\chi_\infty$; the ideal group is treated with its discrete topology. Thus no continuous-character extension theorem is being tacitly assumed.
>
> The extension need not be unique. If $\chi_1,\chi_2$ extend the same principal character, their ratio is trivial on $P^{(\mathfrak m)}$ and factors through the ordinary ideal class group. This describes precisely the freedom left in the construction.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[09 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorns Lemma]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The entire compatibility condition and both character domains were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 5, printed p. 484, PDF p. 503]. Definition (6.1), fraction reduction and the unit relation were checked at [printed pp. 470–471, PDF pp. 489–490].
- **Proof scope:** Independent construction. The character-extension lemma is proved above using Zorn's lemma; it is an algebraic extension into the divisible group $S^1$. Existence is proved; uniqueness is explicitly not claimed.
