---
title: "Exercise G330: Group Extensions and Second Cohomology"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 5, printed p. 827, PDF p. 842"
created: 2026-09-29
---

# Exercise G330: Group Extensions and Second Cohomology

## Problem Statement

> [!question] Lang XX.5
> **Group extensions.** Let $W$ be a group, $A$ a normal subgroup written multiplicatively, and $G=W/A$. Choose coset representatives $F:G\to W$ and define
> $$
> f(x,y)=F(x)F(y)F(xy)^{-1}.
> $$
> **(a)** Prove that $f$ is $A$-valued and $f:G\times G\to A$ is a $2$-cocycle.
>
> **(b)** Given a group $G$ and an abelian group $A$, view an extension as $1\to A\to W\to G\to1$. Show that isomorphic extensions give cocycles defining the same class in $H^1(G,A)$.
>
> **(c)** Prove that the resulting map from isomorphism classes of group extensions to $H^2(G,A)$ is a bijection.

> [!warning] Source issue
> Part (a) has not yet assumed $A$ abelian; ordinary $G$-module $H^2$ requires that assumption, introduced only in (b). For nonabelian $A$, a section gives a nonabelian factor system, not the ordinary cocycle used here. Part (b) prints $H^1$ where $H^2$ is intended. The classification also fixes the $G$-action on $A$ and uses equivalences that are the identity on both end groups.

## Hints

> [!hint]- Hint 1
> Expand $F(x)F(y)F(z)$ in two ways.

> [!hint]- Hint 2
> On $A\times G$ use $(a,x)(b,y)=(a(x\cdot b)f(x,y),xy)$.

## Solution

> [!success]- Independent derivation
> We prove the corrected classification: fix a $G$-action on the abelian group $A$, and consider extensions inducing that action, with equivalences fixing both $A$ and $G$.
>
> **(a)** Projection to $G$ sends $f(x,y)$ to $xy(xy)^{-1}=1$, so $f$ lies in $A$. Because $A$ is abelian, conjugation by $F(x)$ on $A$ is independent of the representative and defines a genuine action $x\cdot a$. Associativity gives
> $$
> f(x,y)f(xy,z)=(x\cdot f(y,z))f(x,yz),
> $$
> the multiplicative $2$-cocycle identity.
>
> **(b)** A new section $F'(x)=b(x)F(x)$ gives
> $$
> f'(x,y)=b(x)(x\cdot b(y))f(x,y)b(xy)^{-1}.
> $$
> The multiplier is the $2$-coboundary of the $1$-cochain $b$. Thus the cohomology class in $H^2$, not $H^1$, is unchanged. An equivalence of extensions transports a section and then differs from any chosen section by exactly such a $b$.
>
> **(c)** First normalize a cocycle. The cocycle identity implies $f(1,x)=c=f(1,1)$ and $f(x,1)=x\cdot c$. Choosing a $1$-cochain with $b(1)=c^{-1}$ makes its cohomologous cocycle satisfy $f(1,x)=f(x,1)=1$. For a normalized cocycle, define multiplication on $W_f=A\times G$ as in the hint. The cocycle identity is precisely associativity, and $(1,1)$ is the identity. An inverse of $(a,x)$ is
> $$
> \left(x^{-1}\cdot(a^{-1}f(x,x^{-1})^{-1}),\,x^{-1}\right).
> $$
> It is a right inverse by multiplication; the equality $f(x,x^{-1})=x\cdot f(x^{-1},x)$ from the cocycle identity also makes it a left inverse. The maps $a\mapsto(a,1)$ and $(a,x)\mapsto x$ form an extension inducing the fixed action. Its section $x\mapsto(1,x)$ has factor set $f$.
>
> If $f'=(\delta b)f$ with both normalized, then $b(1)=1$, and
> $$
> W_{f'}\longrightarrow W_f,\qquad(a,x)\longmapsto(a b(x),x)
> $$
> is an equivalence: substitution in the product verifies multiplicativity, and $(a,x)\mapsto(ab(x)^{-1},x)$ is its inverse. Finally for an original extension with normalized section $F$, the map $W_f\to W$, $(a,x)\mapsto aF(x)$, is a bijective homomorphism fixing the end terms. This proves that the two constructions are inverse.

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions]]

## Notes

- **Source status:** [S2, Ch. XX, Ex. 5, printed p. 827, PDF p. 842]. The original page image was checked; the solution above is an independent derivation.
- **Routing:** The main construction is a group law and equivalence of group extensions. Cohomology supplies its invariant.
- If the induced action is allowed to vary, extensions are classified separately for each action; abstract isomorphism of middle groups is not the equivalence used here.
