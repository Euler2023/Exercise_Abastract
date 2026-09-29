---
title: "Exercise LA474: Norms under Base Change and Balanced Tensor Products"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - tensor-products
  - norms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 5, printed pp. 637–638, PDF pp. 652–653"
created: 2026-09-29
---

# Exercise LA474: Norms under Base Change and Balanced Tensor Products

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 5 — The norm
> Let $B$ be a commutative algebra over the commutative ring $R$ and assume that $B$ is free of rank $r$. Let $A$ be any commutative $R$-algebra. Then $A\otimes B$ is both an $A$-algebra and a $B$-algebra. We view $A\otimes B$ as an $A$-algebra, which is also free of rank $r$. If $\{e_1,\ldots,e_r\}$ is a basis of $B$ over $R$, then
>
> $$
> 1_A\otimes e_1,\ldots,1_A\otimes e_r
> $$
>
> is a basis of $A\otimes B$ over $A$. We may then define the norm
>
> $$
> N=N_{A\otimes B,A}:A\otimes B\longrightarrow A
> $$
>
> as the unique map which coincides with the determinant of the regular representation.
>
> In other words, if $b\in B$ and $b_B$ denotes multiplication by $b$, then
>
> $$
> N_{B,R}(b)=\det(b_B);
> $$
>
> and similarly after extension of the base. Prove:
>
> (a) Let $\varphi:A\to C$ be a homomorphism of $R$-algebras. Then the following diagram is commutative:
>
> $$
> \begin{array}{ccc}
> A\otimes B&\xrightarrow{\ \varphi\otimes\mathrm{id}\ }&C\otimes B\\
> {\scriptstyle N}\downarrow&&\downarrow{\scriptstyle N}\\
> A&\xrightarrow{\ \varphi\ }&C.
> \end{array}
> $$
>
> (b) Let $x,y\in A\otimes B$. Then $N(x\otimes_B y)=N(x)\otimes N(y)$. [Hint: Use the commutativity relations $e_ie_j=e_je_i$ and the associativity.]

> [!info] The base ring of the norm in part (b)
> Unsubscripted tensor products in the statement are over $R$. The printed $x\otimes_B y$ is intentional and is retained. Under the canonical identification
>
> $$
> (A\otimes_R B)\otimes_B(A\otimes_R B)
> \cong(A\otimes_R A)\otimes_R B,
> $$
>
> the left-hand norm in (b) has base ring $A\otimes_R A$ and takes values there. On the right, both norms have base ring $A$, and their tensor product is over $R$. Thus the two sides have the same target. This makes the abbreviated notation explicit; it does not replace the printed tensor by multiplication in $A\otimes_R B$.

## Hints

> [!hint]- Hint 1: Write down a multiplication matrix
> If $e_ie_j=\sum_k c_{ij}^k e_k$ and $z=\sum_i a_i\otimes e_i$, the $(k,j)$ entry of multiplication by $z$ is $\sum_i a_i c_{ij}^k$. Apply $\varphi$ to these entries and use the polynomial formula for the determinant.

> [!hint]- Hint 2: Put both factors over one larger base
> Set $D=A\otimes_R A$. The two maps $A\to D$, $a\mapsto a\otimes1$ and $a\mapsto1\otimes a$, send $x$ and $y$ to elements $x^{(1)},y^{(2)}$ of $D\otimes_R B$. The element $x\otimes_B y$ corresponds to $x^{(1)}y^{(2)}$. Combine (a) with multiplicativity of determinants.

## Solution

> [!success]- Independent proof with all norm bases specified
> For a commutative $R$-algebra $T$, write $B_T=T\otimes_R B$. The given basis of $B$ identifies $B_T$ with $T^r$: the mutually inverse maps are
>
> $$
> (t_1,\ldots,t_r)\longmapsto\sum_i t_i\otimes e_i,
> \qquad
> t\otimes\Bigl(\sum_i r_i e_i\Bigr)\longmapsto(tr_1,\ldots,tr_r).
> $$
>
> For $z\in B_T$, let $m_z$ be multiplication by $z$ and define $N_T(z)=\det_T(m_z)$. A change of basis conjugates the matrix of $m_z$ by an invertible matrix, so its determinant is independent of the chosen basis. Associativity gives $m_{uv}=m_u m_v$; consequently
>
> $$
> N_T(uv)=N_T(u)N_T(v),\qquad N_T(1)=1.
> $$
>
> **(a)** Write $e_ie_j=\sum_k c_{ij}^k e_k$, where $c_{ij}^k\in R$, and $z=\sum_i a_i\otimes e_i$. In the displayed $A$-basis, the multiplication matrix is
>
> $$
> M_A(z)_{kj}=\sum_i a_i c_{ij}^k,
> $$
>
> with the structure constants mapped from $R$ to $A$. The $R$-algebra homomorphism $\varphi$ preserves those constants, so
>
> $$
> M_C\bigl((\varphi\otimes\mathrm{id})(z)\bigr)
> =\varphi\bigl(M_A(z)\bigr)
> $$
>
> entry by entry. The determinant is a polynomial with integer coefficients in the matrix entries. Therefore
>
> $$
> N_C\bigl((\varphi\otimes\mathrm{id})(z)\bigr)
> =\varphi\bigl(N_A(z)\bigr),
> $$
>
> which is exactly the commutativity of the square.
>
> **(b)** Put $D=A\otimes_R A$ and $Q=A\otimes_R B$. Define
>
> $$
> \begin{aligned}
> \theta:Q\otimes_B Q&\longrightarrow D\otimes_R B,\\
> (a\otimes b)\otimes_B(c\otimes d)&\longmapsto(a\otimes c)\otimes bd.
> \end{aligned}
> $$
>
> This respects the $R$-balances in each $Q$ factor and the $B$-balance between them: moving $h\in B$ from one factor to the other changes $bhd$ to $bhd$. Commutativity of $B$ also makes it multiplicative. Its inverse is
>
> $$
> (a\otimes c)\otimes b\longmapsto
> (a\otimes b)\otimes_B(c\otimes1).
> $$
>
> This respects the $R$-balances defining $D\otimes_R B$. Composing in the other order uses
>
> $$
> (a\otimes bd)\otimes_B(c\otimes1)
> =(a\otimes b)\otimes_B(c\otimes d).
> $$
>
> Thus $Q\otimes_B Q$ is identified as a $D$-algebra with $D\otimes_R B$, which is free of rank $r$ over $D$.
>
> Let $\iota_1,\iota_2:A\to D$ be $\iota_1(a)=a\otimes1$ and $\iota_2(a)=1\otimes a$, and put
>
> $$
> x^{(1)}=(\iota_1\otimes\mathrm{id})(x),\qquad
> y^{(2)}=(\iota_2\otimes\mathrm{id})(y).
> $$
>
> Expansion into pure tensors shows $\theta(x\otimes_B y)=x^{(1)}y^{(2)}$. An algebra isomorphism intertwines multiplication operators, so it preserves their determinants over the base $D$. Multiplicativity and part (a) now give
>
> $$
> \begin{aligned}
> N_{Q\otimes_B Q,D}(x\otimes_B y)
> &=N_D\bigl(x^{(1)}y^{(2)}\bigr)\\
> &=N_D(x^{(1)})N_D(y^{(2)})\\
> &=\iota_1\bigl(N_A(x)\bigr)\,\iota_2\bigl(N_A(y)\bigr)\\
> &=N_A(x)\otimes_R N_A(y).
> \end{aligned}
> $$
>
> This proves the printed formula, with the left-hand norm taken over $D$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Source and proof status:** [S2, Ch. XVI, Ex. 5, printed pp. 637–638, PDF pp. 652–653], including the square and the hint in (b), was checked on the original page images. The square is transcribed as searchable mathematics. The proof is an independent derivation using the tensor universal property and determinant multiplicativity.
- **Norm versus linear map:** The regular representation $z\mapsto m_z$ is an algebra homomorphism, but its determinant is generally only multiplicative, not additive. For example, for $B=R\times R$, $N_R(b_1,b_2)=b_1b_2$.
- **Rank:** The relevant rank in both parts remains $r$ because part (b) tensors over $B$. It is not the rank $r^2$ of $B\otimes_R B$ over $R$.
