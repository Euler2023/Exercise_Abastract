---
title: Group Cohomology and Standard Resolutions
aliases:
  - Bar Resolution
  - Group Cohomology
  - Coinduced Group Modules
  - Nonnegative Tate Cohomology
topic: module-theory
tags:
  - concept
  - module-theory
  - group-cohomology
  - homological-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, §1, printed p. 764, PDF p. 779; §6, printed pp. 791–792, PDF pp. 806–807; §7, printed pp. 799 and 801, PDF pp. 814 and 816; Exercises 1–18, printed pp. 826–830, PDF pp. 841–845"
source_status: verified-with-corrections
created: 2026-09-29
---

# Group Cohomology and Standard Resolutions

## Definition

A **$G$-module** is an abelian group with a $G$-action by additive automorphisms, equivalently a left $\mathbb Z[G]$-module. Its invariant subgroup is

$$
A^G=\{a:ga=a\text{ for every }g\in G\}
\cong\operatorname{Hom}_{\mathbb Z[G]}(\mathbb Z,A),
$$

where $\mathbb Z$ has trivial action. The invariants functor is left exact. Its **right derived functors** are group cohomology:

$$
H^q(G,A)=R^q((-)^G)(A)
=\operatorname{Ext}^q_{\mathbb Z[G]}(\mathbb Z,A).
$$

The **standard free resolution** has $E_q=\mathbb Z[G^{q+1}]$ with diagonal action, the deletion boundary

$$
d_q(g_0,\ldots,g_q)=\sum_{j=0}^q(-1)^j
(g_0,\ldots,\widehat{g_j},\ldots,g_q)\quad(q\ge1),
$$

and augmentation $\varepsilon(g_0)=1$ in degree zero. Group cohomology is the cohomology of $\operatorname{Hom}_{\mathbb Z[G]}(E_\bullet,A)$.

## Intuition

An invariant quotient element may have no invariant lift. A one-cocycle records the failure of a chosen lift to be invariant. Higher cohomology continues this obstruction calculation through a resolution.

The homogeneous resolution keeps the group coordinates symmetric. The inhomogeneous bar resolution removes one coordinate using the group action and makes low-degree calculations shorter. Coinduced modules have enough independent function values to contract these cochains explicitly.

## Key Properties

### Free resolutions and cochains

Every tuple has the unique expression

$$
(g_0,\ldots,g_q)=g_0(1,g_0^{-1}g_1,\ldots,g_0^{-1}g_q).
$$

Thus tuples with first coordinate $1$ form a group-ring basis. Double deletions cancel in $d^2$. Prepending $1$ defines an additive contraction $h$, including $h_{-1}(1)=(1)$ at the augmentation, and deletion gives $dh+hd=\mathrm{id}$. The complex is therefore exact. The contraction is generally not equivariant; exactness requires only its additive identity.

The inhomogeneous free basis is $[g_1|\cdots|g_q]$, and the chain isomorphism is

$$
[g_1|\cdots|g_q]\longmapsto(1,g_1,g_1g_2,\ldots,g_1\cdots g_q).
$$

Its inverse sends $(x_0,\ldots,x_q)$ to $x_0[x_0^{-1}x_1|\cdots|x_{q-1}^{-1}x_q]$. Transporting the deletion boundary gives

$$
\begin{aligned}
d[g_1|\cdots|g_q]
={}&g_1[g_2|\cdots|g_q]\\
&+\sum_{j=1}^{q-1}(-1)^j[g_1|\cdots|g_jg_{j+1}|\cdots|g_q]\\
&+(-1)^q[g_1|\cdots|g_{q-1}].
\end{aligned}
$$

Applying equivariant Hom identifies $C^q(G,A)=\operatorname{Map}(G^q,A)$ and $C^0(G,A)=A$. Its coboundary is

$$
\begin{aligned}
(\delta f)(g_1,\ldots,g_{q+1})
={}&g_1f(g_2,\ldots,g_{q+1})\\
&+\sum_{j=1}^q(-1)^j f(g_1,\ldots,g_jg_{j+1},\ldots,g_{q+1})\\
&+(-1)^{q+1}f(g_1,\ldots,g_q).
\end{aligned}
$$

These complexes compute right derived invariants. Freeness gives exact coefficient sequences degree by degree. If $I$ is injective, a positive-degree cocycle on $E_q$ descends to $\operatorname{im}d_q\subset E_{q-1}$ and extends across $E_{q-1}$ by injectivity, becoming a coboundary. The universality theorem for effaceable delta-functors then identifies this cohomology with the derived functors.

### Low-degree interpretation

- $H^0(G,A)=A^G$.
- One-cocycles satisfy $f(xy)=f(x)+xf(y)$.
- One-coboundaries have the form $f(x)=xa-a$.
- Two-cocycles are functions $f:G\times G\to A$ satisfying $xf(y,z)-f(xy,z)+f(x,yz)-f(x,y)=0$.

The last condition classifies extensions with **abelian** kernel $A$ when its induced $G$-action is fixed and extension equivalences induce the identity on both $A$ and $G$. Omitting these qualifications changes the classification problem.

### Coinduction and Shapiro's lemma

For $S\le G$ and an $S$-module $B$, define

$$
\operatorname{Coind}_S^GB=\{u:G\to B:u(sg)=s\,u(g)\},
\qquad (x\cdot u)(g)=u(gx).
$$

Evaluation at $1$ and the inverse formula $J(\varphi)(a)(g)=\varphi(ga)$ give

$$
\operatorname{Hom}_G(A,\operatorname{Coind}_S^GB)
\cong\operatorname{Hom}_S(\operatorname{Res}_S^GA,B).
$$

Coinduction is exact: its underlying abelian group is a product of copies of $B$, indexed by $S\backslash G$. The adjunction and exactness of restriction show that it preserves injectives. Applying it to an injective resolution of $B$, then evaluating invariant functions at $1$, gives **Shapiro's lemma**

$$
H^q(G,\operatorname{Coind}_S^GB)\cong H^q(S,B)\qquad(q\ge0).
$$

The isomorphism is restriction followed by evaluation. At infinite index, this product-based right adjoint must not be confused with tensor induction.

For $S=\{1\}$, write $M_G(B)=\operatorname{Map}(G,B)$. Its positive-degree contraction is

$$
(sf)(g_1,\ldots,g_{q-1})(x)
=f(x,g_1,\ldots,g_{q-1})(1),\qquad
s\delta+\delta s=\mathrm{id}\quad(q>0).
$$

Thus $H^q(G,M_G(B))=0$ for $q>0$. Every $G$-module embeds in $M_G(A)$ by $a\mapsto(x\mapsto xa)$; evaluation at $1$ splits this embedding over $\mathbb Z$.

### Restriction, inflation, and conjugation

A homomorphism $\lambda:G'\to G$ induces cochain pullback by applying $\lambda$ to every argument. For $H\triangleleft G$, quotient pullback with coefficients $A^H\hookrightarrow A$ is inflation. With restriction, it gives

$$
0\longrightarrow H^1(G/H,A^H)
\xrightarrow{\mathrm{inf}}H^1(G,A)
\xrightarrow{\mathrm{res}}H^1(H,A).
$$

Subtracting a coboundary from a cocycle whose restriction has zero class makes it vanish on $H$. Its cocycle identity then makes it constant on quotient cosets with values in $A^H$. This proves the middle exactness. An inflated coboundary is defined by an element fixed by $H$, which proves injectivity of inflation.

Conjugation acts on $H$-cochains by

$$
(g\cdot f)(h_1,\ldots,h_q)
=g f(g^{-1}h_1g,\ldots,g^{-1}h_qg).
$$

For a one-cocycle on $G$, its restriction changes under $g$ by the coboundary of $f(g)$. Thus the image of restriction lies in $H^1(H,A)^G$.

### Finite groups and the Tate degree-zero quotient

For finite $G$, put $N_Ga=\sum_g ga$. Lang calls $A$ **$G$-regular** if an additive endomorphism $u$ satisfies

$$
\sum_g gug^{-1}=\mathrm{id}_A.
$$

Applying this identity to an invariant element gives $A^G=N_GA$. Also $A$ is a summand of $M_G(A)$ by the equivariant retraction

$$
r(f)=\sum_g g\,u(f(g^{-1})).
$$

Hence its positive cohomology vanishes. Projective group-ring modules are regular, as follows from the identity-coefficient projection on free modules and passage to summands.

The **nonnegative Tate groups** are

$$
\widehat H^0(G,A)=A^G/N_GA,\qquad
\widehat H^q(G,A)=H^q(G,A)\quad(q>0).
$$

Their long exact sequence starts with $\widehat H^0(G,A')\to\widehat H^0(G,A)$, without an initial zero. The usual connecting map kills norms because the norm of a lift is an invariant lift. Exactness at the modified middle term follows by subtracting the norm of a lift. A full Tate theory has negative degrees; they are not defined here.

> [!warning] This degree-zero functor is not left exact
> If $|G|>1$, the embedding $\mathbb Z\hookrightarrow\mathbb Z[G]$, $1\mapsto\sum_g g$, induces $\mathbb Z/|G|\mathbb Z\to0$ on $\widehat H^0$. Consequently this family does not satisfy the initial-zero requirement DEL 1 in Lang §7. Exercise 17 requires the convention above.

## Examples

For trivial action, $H^1(G,A)=\operatorname{Hom}(G,A)$. In particular, for finite $G$, $H^1(G,\mathbb Z)=0$ and $H^1(G,\mathbb Q/\mathbb Z)$ is the group of additive characters.

For $G=\langle\sigma\rangle$ cyclic of order $n$, the periodic resolution alternates $1-\sigma$ and $N=1+\cdots+\sigma^{n-1}$. It gives

$$
H^{2r+1}(G,A)=\frac{\ker N}{(1-\sigma)A}\quad(r\ge0),\qquad
H^{2r}(G,A)=\frac{A^G}{NA}\quad(r\ge1).
$$

For trivial coefficients $\mathbb Z$, these are zero in odd degrees and $\mathbb Z/n\mathbb Z$ in positive even degrees.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Derived Functors and Ext|Derived functors and Ext]]
- [[04 - Linear Algebra and Modules/Concepts/Injective Modules and Baer Criterion|Injective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group rings]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induction and reciprocity]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The standard-complex definition was checked at [S2, Ch. XX, §1, printed p. 764, PDF p. 779]; the relevant exercises at printed pp. 826–830, PDF pp. 841–845.
- The corrected boundary, contractions, adjunction, trace retraction, and degree-zero Tate explanation are independent derivations. Linked exercises supply the complete calculations and classification arguments.
- Visible source issues in those notes include the empty-set boundary in Exercise 1, the last bar-boundary term in Exercise 3, “left” instead of “right” derived invariants in Exercises 4 and 9, the two-cochain domain in Exercise 4, the equivariant splitting claim in Exercise 15, the reversed cyclic-cohomology parities in Exercise 16, and the DEL 1 conflict in Exercise 17.
- The right-derived definition was checked on printed p. 791, PDF p. 806; the conflicting terminology on printed p. 792, PDF p. 807; the universality theorem on printed p. 801, PDF p. 816; and DEL 1 on printed p. 799, PDF p. 814.
- Except in the finite-group subsection, $G$ may be infinite. Coefficients are arbitrary $\mathbb Z[G]$-modules. Products and extension arguments use the usual axiom of choice.

