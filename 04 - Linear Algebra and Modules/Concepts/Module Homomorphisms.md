---
title: Module Homomorphisms
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, §14.1, printed pp. 412–414, PDF pp. 424–426"
source_status: partially-verified
status: not-started
---

# Module Homomorphisms

## Definition

> [!info] Homomorphisms of left modules
> Let $R$ be an associative ring with identity, and let $M,N$ be unital left $R$-modules. An **$R$-module homomorphism**, or **$R$-linear map**, is a function $f:M\to N$ such that
> $$
> f(m+m')=f(m)+f(m'),\qquad f(rm)=rf(m)
> $$
> for all $m,m'\in M$ and $r\in R$. Write $\operatorname{Hom}_R(M,N)$ for the set of these maps.
>
> An **isomorphism** is a bijective $R$-linear map. An **endomorphism** has the same domain and codomain; an **automorphism** is a bijective endomorphism.

The two compatibility identities are Artin's definition (14.1.4), printed p. 413 / PDF p. 425. This note explicitly allows noncommutative $R$ and fixes the left-module convention throughout; the proofs below work with these hypotheses.

## Intuition

A module homomorphism preserves both addition and the action of the chosen ring. Over a field, this is a linear transformation. Over $\mathbb Z$, it is exactly a homomorphism of abelian groups: additivity gives $f(nm)=nf(m)$ for positive integers by repeated addition, for zero by $f(0)=0$, and for negative integers by additive inverses.

The kernel records which elements become indistinguishable from zero, while the image records the elements reached in the target. Passing to the quotient by the kernel removes precisely the ambiguity in recovering an input from its image.

## Key Properties

### Zero, negatives, and composition

Additivity gives $f(0)=f(0)+f(0)$, hence $f(0)=0$. Applying $f$ to $m+(-m)=0$ gives $f(-m)=-f(m)$, so $f(m-m')=f(m)-f(m')$.

Identity maps are $R$-linear. If $f:M\to N$ and $g:N\to P$ are $R$-linear, then
$$
(g\circ f)(m+m')=g(f(m)+f(m'))=(g\circ f)(m)+(g\circ f)(m'),
$$
and $(g\circ f)(rm)=g(rf(m))=r(g\circ f)(m)$. Thus compositions are $R$-linear.

If $f$ is bijective, its inverse is $R$-linear: for $n=f(m)$ and $n'=f(m')$,
$$
f^{-1}(n+n')=m+m',\qquad f^{-1}(rn)=rm.
$$

### Kernels, images, and injectivity

> [!abstract] Kernel and image
> For an $R$-linear map $f:M\to N$,
> $$
> \ker f=\{m\in M:f(m)=0\},\qquad
> \operatorname{im}f=\{f(m):m\in M\}.
> $$
> These are submodules of $M$ and $N$, respectively. Moreover, $f$ is injective if and only if $\ker f=\{0\}$.

**Proof.** The kernel contains zero. For $m,m'\in\ker f$ and $r\in R$, we have $f(m-m')=0$ and $f(rm)=0$, so the kernel is closed under subtraction and scalar multiplication. The image contains zero, and
$$
f(m)-f(m')=f(m-m'),\qquad rf(m)=f(rm),
$$
so it has the same closure properties. If $f$ is injective, $f(m)=f(0)$ implies $m=0$. Conversely, if its kernel is zero and $f(m)=f(m')$, then $m-m'\in\ker f$, hence $m=m'$. $\square$

### The additive group of homomorphisms

For any $R$ as above, $\operatorname{Hom}_R(M,N)$ is an **abelian group** under pointwise addition:
$$
(f+g)(m)=f(m)+g(m),\qquad (-f)(m)=-f(m).
$$
Indeed, the zero map is $R$-linear, and commutativity of addition in $N$ gives
$$
\begin{aligned}
(f+g)(m+m')
&=f(m)+f(m')+g(m)+g(m')\\
&=(f+g)(m)+(f+g)(m'),\\
(f+g)(rm)&=rf(m)+rg(m)=r(f+g)(m).
\end{aligned}
$$
Also $(-f)(m+m')=(-f)(m)+(-f)(m')$ and $(-f)(rm)=r(-f)(m)$. Associativity, commutativity, the zero element, and additive inverses hold pointwise because they hold in $N$.

If $R$ is **commutative**, the pointwise rule $(af)(m)=af(m)$ makes this abelian group an $R$-module. Additivity in $m$ follows from distributivity in $N$, and
$$
(af)(rm)=a(rf(m))=r(af(m)).
$$
Thus $af$ is $R$-linear. All scalar-module axioms follow by evaluation at each $m$; for example, $((ab)f)(m)=a(bf(m))$ and $((a+b)f)(m)=(af+bf)(m)$.

> [!warning] Noncommutative scalars
> For general noncommutative $R$, pointwise multiplication by an arbitrary $a\in R$ need not preserve $R$-linearity. Take $R=M_2(\mathbb Q)$, $M=N=R$ with its left regular action, $f=\operatorname{id}_R$, $a=E_{12}$, and $r=E_{21}$, where $E_{ij}$ are matrix units. Then
> $$
> (af)(r)=ar=E_{11},\qquad r(af)(1_R)=ra=E_{22}.
> $$
> Hence $af$ is not a homomorphism of left $R$-modules. Without a commutativity hypothesis, the structure asserted here for $\operatorname{Hom}_R(M,N)$ is only its abelian-group structure.

## Quotients and the First Isomorphism Theorem

### Quotient module and canonical map

Let $K\subseteq M$ be a submodule. The additive cosets form an abelian group $M/K$, with operations
$$
(m+K)+(m'+K)=(m+m')+K,\qquad r(m+K)=rm+K.
$$
These operations are well defined: replacing $m,m'$ by $m+k,m'+k'$ changes their sum by $k+k'\in K$, and replacing $m$ by $m+k$ changes $rm$ by $rk\in K$. The module axioms descend from those of $M$; explicitly,
$$
\begin{aligned}
r((m+K)+(m'+K))&=(rm+rm')+K,\\
(r+s)(m+K)&=(rm+sm)+K,\\
(rs)(m+K)&=r(sm+K),\\
1_R(m+K)&=m+K.
\end{aligned}
$$
Thus $M/K$ is an $R$-module. The canonical map $\pi:M\to M/K$, $m\mapsto m+K$, is additive and respects scalars by these definitions. It is surjective, and $\pi(m)=K$ holds exactly when $m\in K$, so $\ker\pi=K$.

### Mapping property

> [!abstract] Factoring through a quotient
> If $f:M\to N$ is $R$-linear and $K\subseteq\ker f$, there is a unique $R$-linear map $\bar f:M/K\to N$ such that $f=\bar f\circ\pi$. It is given by $\bar f(m+K)=f(m)$.

**Proof.** If $m+K=m'+K$, then $m-m'\in K\subseteq\ker f$, so $f(m)=f(m')$. Hence the formula is well defined. It preserves addition because
$$
\bar f((m+K)+(m'+K))=f(m+m')=\bar f(m+K)+\bar f(m'+K),
$$
and it preserves scalars because $\bar f(r(m+K))=f(rm)=r\bar f(m+K)$. Its composite with $\pi$ is $f$. Any such map must take $m+K=\pi(m)$ to $f(m)$, which proves uniqueness. $\square$

### First isomorphism theorem

> [!abstract] First isomorphism theorem for modules
> Every $R$-linear map $f:M\to N$ induces an isomorphism
> $$
> M/\ker f\xrightarrow{\ \sim\ }\operatorname{im}f,\qquad m+\ker f\longmapsto f(m).
> $$
> In particular, if $f$ is surjective, then $M/\ker f\cong N$.

**Proof.** Regard $f$ as a map to the submodule $\operatorname{im}f$. Apply the mapping property with $K=\ker f$ to obtain the displayed $R$-linear map. It is surjective by the definition of the image. If it takes $m+\ker f$ to zero, then $f(m)=0$, so $m\in\ker f$ and the coset is the zero coset. The kernel is therefore zero, and the injectivity criterion above makes the map injective. Being bijective and $R$-linear, it is an isomorphism; its inverse is $R$-linear by the earlier inverse-map calculation. $\square$

## Examples

> [!example] Reduction and multiplication over the integers
> For $n\ge1$, reduction $\pi:\mathbb Z\to\mathbb Z/n\mathbb Z$ is $\mathbb Z$-linear, surjective, and has kernel $n\mathbb Z$. The first isomorphism theorem gives $\mathbb Z/n\mathbb Z\cong\operatorname{im}\pi$ by the residue-class map itself.
>
> Multiplication by $6$, $u:\mathbb Z\to\mathbb Z$, is also $\mathbb Z$-linear. Its kernel is zero, while its image is $6\mathbb Z$, so it is injective but not surjective. It gives an isomorphism $\mathbb Z\cong6\mathbb Z$, rather than a surjection onto the prescribed codomain $\mathbb Z$.

> [!example] Computing all homomorphisms between two cyclic modules
> A map $f:\mathbb Z/6\mathbb Z\to\mathbb Z/4\mathbb Z$ is determined by $y=f([1])$, because additivity requires $f([k])=ky$. The relation $6[1]=0$ forces $6y=0$. In $\mathbb Z/4\mathbb Z$ this is equivalent to $2y=0$, so $y=[0]$ or $[2]$.
>
> Conversely, either choice defines a map by $[k]\mapsto ky$: replacing $k$ by $k+6t$ changes the value by $6ty=0$. This map is additive and therefore $\mathbb Z$-linear. Consequently $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/6\mathbb Z,\mathbb Z/4\mathbb Z)\cong\mathbb Z/2\mathbb Z$ as an abelian group, with the nonzero map sending $[1]$ to $[2]$.

> [!example] A map from a free module
> The map $f:\mathbb Z^2\to\mathbb Z$, $f(a,b)=2a+3b$, is $\mathbb Z$-linear. Since $f(-1,1)=1$, its image is all of $\mathbb Z$. If $2a+3b=0$, then $3\mid2a$, hence $3\mid a$; writing $a=3t$ gives $b=-2t$. Thus
> $$
> \ker f=\mathbb Z(3,-2),\qquad \mathbb Z^2/\mathbb Z(3,-2)\cong\mathbb Z.
> $$
> The isomorphism sends $(a,b)+\mathbb Z(3,-2)$ to $2a+3b$.

> [!example] The scalar ring matters
> Differentiation $D:\mathbb Q[x]\to\mathbb Q[x]$ is $\mathbb Q$-linear, since it preserves sums and multiplication by rational constants. It is not $\mathbb Q[x]$-linear for the usual multiplication action: $D(x\cdot1)=1$, while $xD(1)=0$. An additive map need not preserve the action of a larger scalar ring.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **Source definitions, visually verified:** Michael Artin, *Algebra*, 2nd ed., Ch. 14, §14.1, module axioms (14.1.1), printed p. 412 / PDF p. 424; the abelian-group/$\mathbb Z$-module correspondence (14.1.2), homomorphisms (14.1.4), kernels and images, and quotient scalars (14.1.5), printed p. 413 / PDF p. 425. The three original pages were rendered at 200 dpi and inspected for this revision.
- **Source theorem statements, visually verified:** Theorem 14.1.6(a)–(b), printed p. 413 / PDF p. 425, states the quotient construction and mapping property; part (c), printed p. 414 / PDF p. 426, states the first isomorphism theorem for a surjective map. Applying it with codomain $\operatorname{im}f$ yields the form stated here.
- **Independent proofs:** Artin explicitly omits the proofs of Theorem 14.1.6 on printed p. 414 / PDF p. 426. The kernel/image arguments, quotient and factorization proofs, and first isomorphism proof in this note are independent derivations, not proofs reproduced from the book. They use the module axioms and the additive coset construction for abelian groups.
- **Independent exposition beyond the checked slice:** The pointwise structure on $\operatorname{Hom}_R(M,N)$, the noncommutative counterexample, the inverse-map calculation, and all worked examples are established directly in this note. They are not attributed to the checked pages. In particular, an $R$-module structure on $\operatorname{Hom}_R(M,N)$ is asserted only when $R$ is commutative.
- **Scope:** All modules here are unital left modules over one fixed associative ring with identity. A map between modules over different rings requires extra scalar-change data and is outside this definition. The metadata remains `partially-verified` because source verification applies to the identified definitions and theorem statements, while the broader exposition and proofs have the independent status recorded above.
