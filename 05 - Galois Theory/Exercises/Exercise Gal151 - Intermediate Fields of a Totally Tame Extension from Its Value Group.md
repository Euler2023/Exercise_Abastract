---
title: 'Exercise Gal151: Intermediate Fields of a Totally Tame Extension from Its Value Group'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §7, Exercise 3, printed p. 159, PDF p. 178
source_refs:
- S4/ch-II/sec-7/ex-3
created: '2026-10-23'
---

# Exercise Gal151: Intermediate Fields of a Totally Tame Extension from Its Value Group

## Problem Statement

> [!question] Neukirch II.7.3
> Let $L/K$ be totally and tamely ramified, and let $\Delta$, respectively $\Gamma$, be the value group of $L$, respectively $K$. Show that the intermediate fields correspond one-to-one to the subgroups of $\Delta/\Gamma$.

## Hints

> [!hint]- Hint 1
> Use the radical construction in (7.7) to choose, for each value coset, an element with a prime-to-p power in K.

> [!hint]- Hint 2
> Two such radical elements with equal value modulo $\Gamma$ differ by an element of $K^*$. Show this by Hensel on a principal unit.

## Solution

> [!success]- Independent derivation and stated source corrections
> Retain the henselian base hypothesis of §7, and let the residue characteristic be $p$. Total tameness means equal residue fields and prime-to-$p$ ramification, with no defect. The radical construction in (7.7), printed pp. 155–156 / PDF pp. 174–175, gives for every $\delta\in\Delta/\Gamma$ an element $a_\delta\in L^*$ in that value coset such that $a_\delta^{m_\delta}\in K$ for some $m_\delta$ prime to $p$. Choose $a_0=1$.
>
> **Uniqueness up to a K-scalar.** If $a,b$ are two such elements in the same coset, choose $c\in K^*$ with $v(c)=v(a/b)$. Then $u=a/(bc)$ is a unit with some prime-to-$p$ power $u^m\in K$. Its residue lies in the common residue field. Choose $d\in\mathfrak o_K^*$ with that residue. The element $(u/d)^m\in1+\mathfrak p_K$ has a unique $m$-th root in $1+\mathfrak p_K$ by Hensel, because $m$ is a unit. Uniqueness also holds in $L$, so that root equals $u/d$. Thus $a/b\in K^*$.
>
> For finite $L/K$, the $a_\delta$ are linearly independent: in a nonzero finite K-linear combination their nonzero summands have different values modulo $\Gamma$, hence a unique least value and cannot cancel. Their number is $e=[L:K]$, so they are a basis. For a subgroup $B\subseteq\Delta/\Gamma$ set $L_B=\sum_{\delta\in B}Ka_\delta$. Products of basis elements have the same coset as $a_{\delta+\epsilon}$, and the uniqueness lemma shows that their ratio is in $K^*$. Hence this is a finite-dimensional K-subalgebra of the field $L$, and every nonzero multiplication map on it is injective, hence surjective; it is a field. The distinct-value property shows its value quotient is exactly $B$.
>
> Conversely, every intermediate $E/K$ is itself totally tame. Apply the same radical construction inside $E$ for each element of its value quotient $B_E$. The uniqueness lemma shows that its chosen radicals are scalar multiples of the $a_\delta$, and the degree equality shows that they form an E-over-K basis. Thus $E=L_{B_E}$. These constructions are inverse, and preserve inclusions.
>
> For an infinite algebraic tame extension, apply the finite argument to each finite set of elements. A finite set of value cosets generates a finite prime-to-$p$ subgroup; its corresponding radical field is finite, so products and inverses remain within the same construction. Taking directed unions proves the same bijection. No assumption that the quotient is cyclic, or that $L/K$ is Galois, was used.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §7, Exercise 3, printed p. 159, PDF p. 178].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
