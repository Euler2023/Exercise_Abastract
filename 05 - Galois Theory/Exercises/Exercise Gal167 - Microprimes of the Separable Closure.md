---
title: 'Exercise Gal167: Microprimes of the Separable Closure'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 3, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-3
created: '2026-10-23'
---

# Exercise Gal167: Microprimes of the Separable Closure

## Problem Statement

> [!question] Neukirch IV.4.3
> For an infinite extension $L|K$, let
> $$
> \operatorname{spec}(L)=\varprojlim_\alpha\operatorname{spec}(L_\alpha),
> $$
> where $L_\alpha|K$ varies over the finite subextensions of $L|K$. What are the microprimes of $\bar k$?

## Hints

> [!hint]- Hint 1
> 固定一个底层微素点及其本原代表 $s$。在有限 Galois 层，上方微素点由 $\overline{\langle s\rangle}$ 在有限商的陪集表示描述。

> [!hint]- Hint 2
> 取所有有限层的逆极限，得到 $G/\overline{\langle s\rangle}$；其点可等价解释为实际的共轭元素，而不再取共轭类。

## Solution

> [!success]- Independent derivation
> 保留前两题关于闭交换子群的假设。对底层微素点 $\mathfrak p=[s]_G$，令 $C=\overline{\langle s\rangle}=C_G(s)$。有限 Galois 层 $L_\alpha/k$ 对应开正规 $H_\alpha$。前题给出纤维
> $$
> \operatorname{spec}(L_\alpha)_{\mathfrak p}\simeq H_\alpha\backslash G/C.
> $$
> 所有 $H_\alpha$ 的交为 $1$。紧性使
> $$
> \varprojlim_\alpha H_\alpha\backslash G/C\simeq G/C:
> $$
> 相容陪集纤维形成紧闭集合的有限交族，给出代表元；若两个代表在全部有限商中相同，则它们之差属于闭子群 $C$，故给同一点。
>
> 映射 $gC\mapsto gsg^{-1}$ 为双射到 $s$ 的实际共轭元素集合：单射恰由 $C=C_G(s)$ 保证。因此将所有底层微素点的纤维并起来，$\operatorname{spec}(\bar k)$ 可识别为 $G$ 中所有本原 Frobenius **元素本身**，而 $\operatorname{spec}(k)$ 只记它们的共轭类。等价地，每一点对应其实际嵌入 $G$ 的带正整数度生成元的最大 procyclic 子群；该生成元由 $d$ 唯一确定。
>
> 这并不是把有限层定义机械应用到平凡的 $G_{\bar k}$：对无限层，题面已经改用逆极限定义，所保留的是全部有限层兼容的“位置”。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Inverse Limits]]
- [[01 - Group Theory/Concepts/Group Actions|Conjugation Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 3, printed p. 290, PDF p. 309]. 独立逐纤维逆极限计算；一般无限 $L$ 的定义由有限层的组合相容性保证良定义。
