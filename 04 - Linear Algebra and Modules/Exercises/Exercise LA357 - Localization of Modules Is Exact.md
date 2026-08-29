---
title: "Exercise LA357: Localization of Modules Is Exact"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - localization
  - exact-sequences
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 9, printed p. 167, PDF p. 182"
created: 2026-08-29
---

# Exercise LA357: Localization of Modules Is Exact

## Problem Statement

> [!question] Exercise 9
> **(a)** Let $A$ be a commutative ring and let $M$ be an $A$-module. Let $S$ be a multiplicative subset of $A$. Define $S^{-1}M$ in a manner analogous to the one used to define $S^{-1}A$, and show that $S^{-1}M$ is an $S^{-1}A$-module.
>
> **(b)** If
>
> $$
> 0\longrightarrow M'\longrightarrow M\longrightarrow M''\longrightarrow0
> $$
>
> is an exact sequence, show that
>
> $$
> 0\longrightarrow S^{-1}M'\longrightarrow S^{-1}M
> \longrightarrow S^{-1}M''\longrightarrow0
> $$
>
> is exact.

## Hints

> [!hint]- Hint 1
> On $M\times S$, imitate the equivalence relation for ring fractions, but allow a further denominator to annihilate a failed cross-multiplication.

> [!hint]- Hint 2
> Use the vanishing criterion
>
> $$
> \frac{m}{s}=0
> \quad\Longleftrightarrow\quad
> tm=0\text{ for some }t\in S.
> $$

> [!hint]- Hint 3
> For middle exactness in (b), if the image of $m/s$ vanishes, first find $t\in S$ for which $tm$ lies in the image of $M'\to M$.

## Solution

> [!success]- Solution
> **(a) Construction.** On $M\times S$, define
>
> $$
> (m,s)\sim(m',s')
> $$
>
> if there is $u\in S$ such that
>
> $$
> u(s'm-sm')=0.
> $$
>
> This is an equivalence relation. Reflexivity uses $u=1$, and symmetry follows by changing a sign. For transitivity, suppose
>
> $$
> u(s'm-sm')=0,
> \qquad
> v(s''m'-s'm'')=0.
> $$
>
> Since
>
> $$
> s'(s''m-sm'')
> =
> s''(s'm-sm')+s(s''m'-s'm''),
> $$
>
> the element $uvs'\in S$ annihilates $s''m-sm''$, proving $(m,s)\sim(m'',s'')$.
>
> Denote the class of $(m,s)$ by $m/s$ and the set of classes by $S^{-1}M$. Define
>
> $$
> \frac{m}{s}+\frac{m'}{s'}
> =\frac{s'm+sm'}{ss'},
> \qquad
> \frac{a}{t}\cdot\frac{m}{s}
> =\frac{am}{ts}.
> $$
>
> For well-definedness of addition, suppose
>
> $$
> u(tm-sn)=0,
> \qquad
> v(t'm'-s'n')=0.
> $$
>
> The cross-multiplication difference between the proposed sums is
>
> $$
> tt'(s'm+sm')-ss'(t'n+tn')
> =
> t's'(tm-sn)+ts(t'm'-s'n'),
> $$
>
> and $uv\in S$ annihilates it. Thus the sum is independent of representatives.
>
> Likewise, if
>
> $$
> u(qa-rb)=0,
> \qquad
> v(tm-sn)=0,
> $$
>
> then the cross-multiplication difference for the scalar products is
>
> $$
> qt(am)-rs(bn)
> =
> qa(tm-sn)+sn(qa-rb),
> $$
>
> which is annihilated by $uv$. The scalar action is therefore well-defined. Additive inverses are given by $-(m/s)=(-m)/s$, and all module axioms now follow by applying the identities of $A$ and $M$ to common-denominator representatives. Thus $S^{-1}M$ is an $S^{-1}A$-module.
>
> Taking $(m',s')=(0,1)$ in the equivalence relation gives the useful criterion
>
> $$
> \frac{m}{s}=0
> \quad\Longleftrightarrow\quad
> um=0\text{ for some }u\in S.
> $$
>
> **(b) Exactness.** Write the original sequence as
>
> $$
> 0\longrightarrow M'\xrightarrow{f}M\xrightarrow{g}M''
> \longrightarrow0.
> $$
>
> The localized maps are given by
>
> $$
> S^{-1}f\left(\frac{m'}s\right)=\frac{f(m')}s,
> \qquad
> S^{-1}g\left(\frac ms\right)=\frac{g(m)}s.
> $$
>
> If $f(m')/s=0$, then some $t\in S$ satisfies $tf(m')=0$. Since $f$ is injective, $tm'=0$, hence $m'/s=0$. Therefore $S^{-1}f$ is injective.
>
> Now suppose $g(m)/s=0$. There is $t\in S$ with $tg(m)=0$, so $tm\in\ker g=\operatorname{im}f$. Choose $m'\in M'$ with $f(m')=tm$. Then
>
> $$
> \frac ms=\frac{tm}{ts}
> =S^{-1}f\left(\frac{m'}{ts}\right).
> $$
>
> Hence $\ker(S^{-1}g)\subseteq\operatorname{im}(S^{-1}f)$; the reverse inclusion follows from $g\circ f=0$.
>
> Finally, given $m''/s\in S^{-1}M''$, choose $m\in M$ with $g(m)=m''$. Then $S^{-1}g(m/s)=m''/s$, so $S^{-1}g$ is surjective. The localized sequence is exact.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Routing rationale:** The construction and the proof are computations with module fractions and exact sequences, so the exercise is routed to Linear Algebra and Modules.
- **Proof boundary:** Lang poses both assertions as an exercise. The construction and exactness proof above are independent derivations.
- **Source status:** The complete statement and both displayed exact sequences were visually checked at [S2, Ch. III, Ex. 9, printed p. 167, PDF p. 182].
