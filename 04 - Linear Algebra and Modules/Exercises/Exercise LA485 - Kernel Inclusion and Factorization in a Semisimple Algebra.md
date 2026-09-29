---
title: "Exercise LA485: Kernel Inclusion and Factorization in a Semisimple Algebra"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - semisimplicity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 9, printed pp. 661–662, PDF pp. 676–677"
created: 2026-09-29
---

# Exercise LA485: Kernel Inclusion and Factorization in a Semisimple Algebra

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 9
> Let $E$ be a finite dimensional vector space over a field $k$. Let $R$ be a semisimple subalgebra of $\operatorname{End}_k(E)$. Let $a,b\in R$. Assume that
>
> $$
> \operatorname{Ker}b_E\supset\operatorname{Ker}a_E,
> $$
>
> where $b_E$ is multiplication by $b$ on $E$, and similarly for $a$. Show that there exists an element $s\in R$ such that $sa=b$. [Hint: Reduce to $R$ simple. Then $R=\operatorname{End}_D(E_0)$ and $E=E_0^{(n)}$. Let $v_1,\ldots,v_r\in E$ be a $D$-basis for $aE$. Define $s$ by $s(av_i)=bv_i$ and extend $s$ by $D$-linearity. Then $sa_E=b_E$, so $sa=b$.]

> [!warning] Source issue in the printed hint
> The prescription $s(av_i)=bv_i$ requires that the vectors $av_i$ form a basis of the image, with the $v_i$ chosen as preimages. The printed assertion that the $v_i$ themselves form a basis of $aE$ does not provide this. There is also a multiplicity distinction: when $E=E_0^{(n)}$, an arbitrary $D$-linear extension on $E$ need not belong to the diagonal copy of $R=\operatorname{End}_D(E_0)$. A corrected version of that route works on each simple constituent $E_0$ and then uses the same endomorphism on all its copies. The proof below instead constructs the factor directly inside $R$.

## Hints

> [!hint]- Hint 1: Use the regular module of the algebra
> Right multiplication by $a$ is a homomorphism of left $R$-modules. In a semisimple module, its kernel and its image admit complementary submodules.

> [!hint]- Hint 2: Construct an inner inverse of $a$
> Find $t\in R$ with $ata=a$. Then $a(1-ta)=0$, so the image of $1-ta$ on $E$ lies in $\operatorname{Ker}a_E$. Apply the hypothesis to obtain $b=bta$.

## Solution

> [!success]- Independent proof inside the semisimple algebra
> Regard $R$ as a left module over itself. Since $R$ is semisimple, every left ideal has a complementary left ideal. The map
>
> $$
> \rho_a:R\longrightarrow Ra,\qquad x\longmapsto xa
> $$
>
> is a surjective homomorphism of left $R$-modules. Choose a complement $C$ to its kernel. Then $\rho_a|_C:C\to Ra$ is an isomorphism: it is injective by the direct-sum decomposition, and every $x\in R$ has the same image as its $C$-component. Let $j:Ra\to R$ be its inverse followed by the inclusion of $C$ into $R$. Thus $\rho_a j$ is the identity on $Ra$.
>
> The left ideal $Ra$ also has a complement in $R$. Let $p:R\to Ra$ be the associated $R$-linear projection, and put $h=jp:R\to R$. Every endomorphism of the left regular module is right multiplication by its value at $1$: if $t=h(1)$, then
>
> $$
> h(x)=xh(1)=xt.
> $$
>
> Since $a\in Ra$, we have $p(a)=a$, and therefore
>
> $$
> ata=\rho_a(h(a))=\rho_a(j(a))=a.
> $$
>
> Consequently $a(1-ta)=0$. For each $v\in E$, the vector $(1-ta)v$ is in $\operatorname{Ker}a_E$, hence in $\operatorname{Ker}b_E$ by the hypothesis. Thus
>
> $$
> b(1-ta)v=0\qquad\text{for every }v\in E.
> $$
>
> The inclusion $R\subseteq\operatorname{End}_k(E)$ is faithful, so equality of these operators is equality in $R$. It follows that $b=bta$. Taking $s=bt\in R$ gives $sa=b$, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source and proof status:** [S2, Ch. XVII, Ex. 9, printed pp. 661–662, PDF pp. 676–677], including the complete printed hint, was checked on the original page images. The hint's basis/preimage and multiplicity issues are recorded above. The inner-inverse proof is an independent derivation.
- **Structural input:** We use the characterization of semisimple modules by the existence of a complement to every submodule. The identity $h(x)=xh(1)$ for the left regular module is proved explicitly.
- **Boundary:** The containment symbol is used inclusively. The reverse implication is immediate from $b=sa$: if $av=0$, then $bv=sav=0$. Thus the exercise characterizes factorization within $R$ by this kernel containment.
